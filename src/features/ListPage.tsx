import React from 'react';
// import { useQuery } from '@tanstack/react-query';
import MovieSearch from './search-component/MovieSearch';
// import { searchMovies } from '../api/movies.queries';
import useListMovies from './list-view/useMovieList';
import { searchMoviesQuery } from '../api/movies.queries';
import PagingMenu from './pagination-component/PagingMenu';

export default function ListPage() {
  const {
    onSearchComplete, search, pagingOptions, setPagingOptions,
  } = useListMovies();
  const { movies, isLoading, error } = searchMoviesQuery(search);

  console.log('Data', movies, isLoading, error);

  return (
    <div>
      <MovieSearch setSearch={onSearchComplete} />
      <PagingMenu
        pagingOptions={pagingOptions}
        totalItems={movies.totalResults}
        onPageChange={setPagingOptions}
      />
    </div>
  );
}
