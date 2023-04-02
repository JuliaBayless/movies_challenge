import React from 'react';
import { useNavigate } from 'react-router';
import './Card.css';
import { Movie } from '../api/types';

interface CardProps {
  movie: Movie;
}

export default function Card({ movie }: CardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };

  return (
    <div
      className="card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <div className="card-details">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <p>
          Type:
          {' '}
          {movie.Type}
        </p>
      </div>
    </div>
  );
}
