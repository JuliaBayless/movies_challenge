import React from 'react';
// import useListMovies from '../list-view/useMovieList';
import SearchBar from '../../components/Searchbar';
import { MediaType } from '../../api/types';
import FilterByType from './FilterByType';

interface SearchBarProps {
  setSearch: (query: string) => void;
  setFilter: (filter: MediaType) => void;
}

export default function MovieSearch({ setSearch, setFilter }: SearchBarProps) {
  return (

    <div style={{ display: 'flex' }}>
      <SearchBar setSearch={setSearch} style={{ marginRight: '8px' }} />
      <FilterByType setFilter={setFilter} />
    </div>

  );
}
