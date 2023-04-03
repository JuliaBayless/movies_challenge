import React, { useState } from 'react';
import { MediaType } from '../../api/types';
import './FilterDropDown.css';

interface FilterByTypeProps {
  setFilter: (filter: MediaType | undefined) => void;
}

export default function FilterDropDown({ setFilter }: FilterByTypeProps) {
  const [selected, setSelected] = useState<MediaType | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleClick(type: MediaType | undefined) {
    setSelected(type);
    setFilter(type);
  }

  return (
    <div className="dropdown">
      <button
        type="button"
        className={`filter-button ${isOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
      >
        Filter
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a
            href="#option1"
            className={selected === MediaType.MOVIE ? 'selected' : ''}
            onClick={() => handleClick(MediaType.MOVIE)}
          >
            Movies
          </a>
          <a
            href="#option2"
            className={selected === MediaType.SERIES ? 'selected' : ''}
            onClick={() => handleClick(MediaType.SERIES)}
          >
            Series
          </a>
          <a
            href="#option3"
            className={selected === MediaType.EPISODE ? 'selected' : ''}
            onClick={() => handleClick(MediaType.EPISODE)}
          >
            Episode
          </a>
          <a
            href="#option4"
            className={selected === undefined ? 'selected' : ''}
            onClick={() => handleClick(undefined)}
          >
            None
          </a>
        </div>
      )}
    </div>
  );
}
