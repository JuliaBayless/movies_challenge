import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Movie } from '../../server/types';
// import { SearchParams } from '../features/list-view/types';

const buildSearch = (search: any): string => {
  console.log('IN BUILD', search);
  if (search) {
    return `search=${search}`;
  }
  return '';
};

// const buildFilter = ({ type, year, page }: SearchParams): string => {
//   let url: string = '';

//   if (year) {
//     url += `&y=${year}`;
//   }

//   if (type) {
//     if (Array.isArray(type)) {
//       url += `&type=${type.join(',')}`;
//     } else {
//       url += `&type=${type}`;
//     }
//   }

//   if (page) {
//     url += `&page=${page}`;
//   }

//   return url;
// };

interface QueryReturn {
  movies: any,
  isLoading: boolean,
  isFetching: boolean,
  error: any
}
const searchMoviesQuery = (
  search?: string,
  // filter?: SearchParams,
): QueryReturn => {
  const query = buildSearch(search);
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
// const searchMovies = (query: string) => ({
//   refetchOnWindowFocus: false,
//   queryKey: ['GET /movies'],
//   queryFn: async () => {
//     const response = await axios.get<{ Search: Movie[] }>(`${process.env.REACT_APP_SERVER_URL}/movies&${query}`);
//     return response;
//   },
// });

const getMovie = (title: string) => ({
  refetchOnWindowFocus: false,
  queryKey: ['GET /movie'],
  queryFn: async () => {
    const response = await axios.get<{ Search: Movie }>(`${process.env.REACT_APP_SERVER_URL}/movie/${title}`);
    return response.data;
  },
});

export { searchMoviesQuery, getMovie };
