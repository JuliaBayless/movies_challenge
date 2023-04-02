import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Movie, SearchResponse, MediaType } from '../../server/types';
import { PagingOptions, SearchParams } from './types';

const buildSearch = ({ search, type, page }: SearchParams): string => {
  let url: string = '';
  if (search) {
    url += `search=${search}`;
  }
  if (type) {
    url += `&type=${type}`;
  }
  if (page) {
    url += `&page=${page}`;
  }
  return url;
};

interface QueryReturn {
  movies: SearchResponse,
  isLoading: boolean,
  isFetching: boolean,
  error: any
}
const searchMoviesQuery = (
  search?: string,
  filter?: MediaType,
  pagingOptions?: PagingOptions,
): QueryReturn => {
  const query = buildSearch({ search, type: filter, page: pagingOptions?.page });
  console.log(`${process.env.REACT_APP_SERVER_URL}/movies?${query}`);
  const {
    isLoading, isFetching, error, data,
  } = useQuery({
    queryKey: [`/movies&${query}`],
    keepPreviousData: true,
    enabled: search !== undefined,
    queryFn: async () => {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies?${query}`);
      return res.data;
    },
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
