import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

interface SearchBarProps {
  setSearch: (query: string) => void;
  style: React.CSSProperties
}

export default function SearchBar({ setSearch, style }: SearchBarProps) {
  const [value, setValue] = useState('');

  const keyPress = (keyCode: string) => {
    if (keyCode === 'Enter') setSearch(value);
  };

  return (
    <div className="search-container" style={style}>
      <input
        type="text"
        placeholder="Media Title Here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => keyPress(e.key)}
      />
      <button type="submit" onClick={() => setSearch(value)}>
        <SearchIcon />
      </button>
    </div>
  );
}
