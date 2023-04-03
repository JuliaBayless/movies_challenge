import React from 'react';

import SearchBar from '../../components/Searchbar';
import { MediaType } from '../../api/types';
import FilterDropDown from './FilterDropDown';

interface SearchBarProps {
  setSearch: (query: string) => void;
  setFilter: (filter: MediaType | undefined) => void;
}

export default function MovieSearch({ setSearch, setFilter }: SearchBarProps) {
  return (

    <div style={{ display: 'flex' }}>
      <SearchBar setSearch={setSearch} style={{ marginRight: '8px' }} />
      <FilterDropDown setFilter={setFilter} />
    </div>

  );
}
