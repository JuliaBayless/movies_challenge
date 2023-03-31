import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

interface SearchBarProps {
  setSearch: (query: string) => void;
}

export default function SearchBar({ setSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch(query);
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setSearch(query);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="search-container">
        <input type="text" placeholder="Search..." value={query} onChange={handleQueryChange} onKeyDown={handleKeyDown} />
        <button type="submit">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

