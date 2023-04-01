import React from 'react';
// import { useQuery } from '@tanstack/react-query';
import MovieSearch from './search-component/MovieSearch';
// import { searchMovies } from '../api/movies.queries';
import useListMovies from './list-view/useMovieList';
import { searchMoviesQuery } from '../api/movies.queries';

export default function ListPage() {
  const { setSearch, search } = useListMovies();
  const { movies, isLoading, error } = searchMoviesQuery(search);
  console.log('SEARCH', search, isLoading, error);
  console.log('Data', movies);
  return (
    <div>
      <MovieSearch setSearch={setSearch} />
    </div>
  );
}
