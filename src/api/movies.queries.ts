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
  error: any
}
const searchMoviesQuery = (
  search?: string,
  filter?: MediaType,
  pagingOptions?: PagingOptions,
): SearchMoviesReturn => {
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

interface GetMovieReturn {
  movie: MovieDetails | undefined,
  isLoading: boolean,
  isFetching: boolean,
  error: unknown
}
const getMovie = (imdbID: string | undefined): GetMovieReturn => {
  const {
    isLoading, isFetching, error, data,
  } = useQuery({
    refetchOnWindowFocus: false,
    enabled: imdbID !== undefined,
    queryKey: ['GET /movie', imdbID],
    queryFn: async () => {
      const response = await axios.get<MovieDetails>(`${process.env.REACT_APP_SERVER_URL}/movie/${imdbID}`);
      return response.data;
    },
  });
  return {
    movie: data,
    isLoading,
    isFetching,
    error,
  };
};

export { searchMoviesQuery, getMovie };
