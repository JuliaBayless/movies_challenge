import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

interface SearchBarProps {
  setSearch: (query: string) => void;
  // onComplete: () => void;
  style: React.CSSProperties
}

export default function SearchBar({ setSearch, style }: SearchBarProps) {
  const [value, setValue] = useState('');
  const keyPress = (keyCode: string) => {
    if (keyCode === 'Enter') setSearch(value);
  };
  // const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setSearch(value);
  //   // onComplete();
  // };

  // const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  // const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === 'Enter') {
  //     event.preventDefault();
  //     setSearch(value);
  //     // onComplete();
  //   }
  // };

  return (
    <div className="search-container" style={style}>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => keyPress(e.key)}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </div>
  );
}
