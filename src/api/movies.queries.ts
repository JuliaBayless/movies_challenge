import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Movie, SearchResponse, MediaType } from '../../server/types';
import { PagingOptions } from './types';
// import { SearchParams } from '../features/list-view/types';

const buildSearch = (search?: any): string => {
  console.log('IN BUILD', search);
  if (search) {
    return `search=${search}`;
  }
  return '';
};

const buildPaging = (pagingOptions?: PagingOptions): string => {
  console.log('IN PAGE', pagingOptions);
  if (pagingOptions) {
    return `&page=${pagingOptions.page}`;
  }
  return '';
};

const buildType = (type?: MediaType): string => {
  console.log('IN type', type);
  if (type) {
    return `&type=${type}`;
  }
  return '';
};

interface QueryReturn {
  movies: SearchResponse,
  isLoading: boolean,
  isFetching: boolean,
  error: any
}
const searchMoviesQuery = (
  search?: string,
  pagingOptions?: PagingOptions,
  filter?: MediaType,
): QueryReturn => {
  const query = buildSearch(search) + buildType(filter) + buildPaging(pagingOptions);
  console.log(`${process.env.REACT_APP_SERVER_URL}/movies?${query}`);
  const {
    isLoading, isFetching, error, data,
  } = useQuery([`/movies&${query}`], async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies?${query}`);
    console.log('RESULT', res);
    return res.data;
  });
  return {
    movies: data,
    isLoading,
    isFetching,
    error,
  };
};

const getMovie = (title: string) => ({
  refetchOnWindowFocus: false,
  queryKey: ['GET /movie'],
  queryFn: async () => {
    const response = await axios.get<{ Search: Movie }>(`${process.env.REACT_APP_SERVER_URL}/movie/${title}`);
    return response.data;
  },
});

export { searchMoviesQuery, getMovie };
