import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import {
  MovieDetails, PagingOptions, SearchParams, SearchResponse, MediaType,
} from './types';

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

interface SearchMoviesReturn {
  movies: SearchResponse,
  isLoading: boolean,
  isFetching: boolean,
  error: unknown,
}
const searchMoviesQuery = (
  search?: string,
  filter?: MediaType,
  pagingOptions?: PagingOptions,
): SearchMoviesReturn => {
  const query = buildSearch({ search, type: filter, page: pagingOptions?.page });
  const {
    isLoading, isFetching, error, data,
  } = useQuery({
    queryKey: [`/movies&${query}`],
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    enabled: search !== undefined,
    queryFn: async () => {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/movies?${query}`);
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

interface GetMovieReturn {
  movie: MovieDetails,
  isLoading: boolean,
  isFetching: boolean,
  isError: boolean,
  error: unknown,
}
const getMovie = (imdbID: string | undefined): GetMovieReturn => {
  const {
    isLoading, isFetching, isError, data, error,
  } = useQuery({
    refetchOnWindowFocus: false,
    enabled: imdbID !== undefined,
    queryKey: ['GET /movie', imdbID],
    queryFn: async () => {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/movies/${imdbID}`);
      return response.data;
    },
  });
  return {
    movie: data,
    isLoading,
    isFetching,
    isError,
    error,
  };
};

export { searchMoviesQuery, getMovie };
