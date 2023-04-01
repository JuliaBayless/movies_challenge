import React from 'react';
// import useListMovies from '../list-view/useMovieList';
import SearchBar from '../../components/Searchbar';

interface SearchBarProps {
  setSearch: (query: string) => void;
}

export default function MovieSearch({ setSearch }: SearchBarProps) {
  return (

    <div style={{ display: 'flex' }}>
      <SearchBar setSearch={setSearch} style={{ marginRight: '8px' }} />
      {/* filter button with filter params would go here */}
    </div>

  );
}
