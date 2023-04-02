import React from 'react';
import MovieSearch from './search-component/MovieSearch';
import useListMovies from './list-view/useMovieList';
import { searchMoviesQuery } from '../api/movies.queries';
import PagingMenu from './pagination-component/PagingMenu';
import MovieList from './list-view/MovieList';

export default function ListPage() {
  const {
    search, pagingOptions, filter, onSearchComplete, setPagingOptions, onFilterComplete,
  } = useListMovies();
  const { movies, isLoading, error } = searchMoviesQuery(search, filter, pagingOptions);

  console.log('Data', movies, isLoading, error, pagingOptions, search);

  return (
    <div>
      <MovieSearch setSearch={onSearchComplete} setFilter={onFilterComplete} />
      <PagingMenu
        pagingOptions={pagingOptions}
        totalItems={movies && movies.totalResults}
        onPageChange={(next: number) => setPagingOptions({ page: next, page_size: 10 })}
      />
      {/* {isLoading && <p>...Loading</p>} */}
      {movies && movies.Search &&
      <MovieList movies={movies.Search} />}
    </div>
  );
}
