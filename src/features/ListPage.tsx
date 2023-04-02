import React from 'react';
import MovieSearch from './search-component/MovieSearch';
import useListMovies from './list-view/useMovieList';
import { searchMoviesQuery } from '../api/movies.queries';
import PagingMenu from './pagination-component/PagingMenu';
import MovieList from './list-view/MovieList';
import './ListPage.css';

export default function ListPage() {
  const {
    search, pagingOptions, filter, onSearchComplete, setPagingOptions, onFilterComplete,
  } = useListMovies();
  const { movies } = searchMoviesQuery(search, filter, pagingOptions);

  return (
    <div className="listPage-container">
      <div className="listPage-content">
        <div className="search-paging-container">
          <MovieSearch setSearch={onSearchComplete} setFilter={onFilterComplete} />
          {movies && movies.Search && (
          <PagingMenu
            pagingOptions={pagingOptions}
            totalItems={movies && movies.totalResults}
            onPageChange={(next: number) => setPagingOptions({ page: next, page_size: 10 })}
          />
          )}
          {movies && movies.Search && (
            <div className="movie-list-container">
              <MovieList movies={movies.Search} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
