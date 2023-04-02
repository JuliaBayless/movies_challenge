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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '300px',
          }}
        >
          <h2
            className="card-font card-title"
            style={{
              flex: 1, flexWrap: 'wrap', lineHeight: 1,
            }}
          >
            {movie.Title}
          </h2>
          <p className="card-font">
            {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}
            {' '}
            released in
            {' '}
            {movie.Year}
          </p>
        </div>
      </div>
    </div>
  );
}
