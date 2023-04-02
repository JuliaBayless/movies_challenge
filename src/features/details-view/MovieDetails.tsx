import React from 'react';
import './DetailsPage.css';
import { MovieDetails } from '../../api/types';

export default function Details(movie: MovieDetails) {
  const {
    Title, Year, Runtime, Genre, Actors, Plot, Awards, Poster, Ratings,
  } = movie;

  if (!movie) {
    return <div>No movie data found</div>;
  }

  return (
    <div className="details-container">
      <div className="movie-info">
        <h1>
          {Title}
          {' '}
          (
          {Year}
          )
        </h1>
        <p>
          Runtime:
          {' '}
          {Runtime}
        </p>
        <p>
          Genre:
          {' '}
          {Genre}
        </p>
        <p>
          Actors:
          {' '}
          {Actors}
        </p>
        <p>
          Plot:
          {' '}
          {Plot}
        </p>
        <p>
          Awards:
          {' '}
          {Awards}
        </p>
      </div>
      <img className="movie-poster" src={Poster} alt={`${Title} poster`} />
      <div className="ratings">
        <h2>Ratings</h2>
        {Ratings.map((rating) => (
          <div key={rating.Source} className="rating">
            <p>
              {rating.Source}
              :
              {' '}
              {rating.Value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
