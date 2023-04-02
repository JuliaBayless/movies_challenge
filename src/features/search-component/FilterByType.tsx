import React, { useState } from 'react';
import { MediaType } from '../../api/types';

interface FilterByTypeProps {
  setFilter: (filter: MediaType) => void;
}

export default function FilterByType({ setFilter }: FilterByTypeProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <button type="button" className="dropdown-button" onClick={toggleDropdown}>
        Filter
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#option1" onClick={() => setFilter(MediaType.MOVIE)}>Movies</a>
          <a href="#option2" onClick={() => setFilter(MediaType.SERIES)}>Series</a>
          <a href="#option3" onClick={() => setFilter(MediaType.EPISODE)}>Episode</a>
        </div>
      )}
    </div>
  );
}
