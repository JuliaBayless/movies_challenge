import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MovieSearch from './search-component/MovieSearch';
import useListMovies from './list-view/useMovieList';
import { searchMoviesQuery } from '../api/movies.queries';
import PagingMenu from './pagination-component/PagingMenu';
import MovieList from './list-view/MovieList';
import './ListPage.css';
import { SearchResponse } from '../api/types';

export default function ListPage() {
  const {
    search, pagingOptions, filter, onSearchComplete, setPagingOptions, onFilterComplete,
  } = useListMovies();
  const { movies } = searchMoviesQuery(search, filter, pagingOptions);
  // eslint-disable-next-line no-console
  console.log(movies)


  function renderErrors(movies: SearchResponse) {
    if (movies?.Error) {
      let message: string = '';
      if (movies.Error === 'Too many results.') {
        message = 'Too many to list! Try refining your search!';
      } else if (movies.Error === 'Movie not found!') {
        message = 'Nada... try broadening your search';
      }
      return (
        <div className="arrow-icon">
          <ArrowUpwardIcon />
          <p className="welcome-text">{message}</p>
        </div>
      );
  }}


  return (
    <div className="listPage-container">
      <div className="listPage-content">
        <div className="search-paging-container">
          <MovieSearch setSearch={onSearchComplete} setFilter={onFilterComplete} />
          {renderErrors(movies)}
          {movies && movies.Search && (
          <>
            <PagingMenu
              pagingOptions={pagingOptions}
              totalItems={movies && movies.totalResults}
              onPageChange={(next: number) => setPagingOptions({ page: next, page_size: 10 })}
            />
            <div className="movie-list-container">
              <MovieList movies={movies.Search} />
            </div>
          </>
          )}
          {!movies && (
          <div className="arrow-icon">
            <ArrowUpwardIcon />
            <p className="welcome-text bounce">Choose your adventure</p>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
