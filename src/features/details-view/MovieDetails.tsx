import React from 'react';
import './MovieDetails.css';
import { v4 as uuidv4 } from 'uuid';
import { MovieDetails } from '../../api/types';

interface MoveDetailsProps {
  movieDetails: MovieDetails,
}

export default function Details({ movieDetails }: MoveDetailsProps) {
  const {
    Title, Year, Runtime, Genre, Actors, Plot, Awards, Poster, Ratings,
  } = movieDetails;

  if (!movieDetails) {
    return <div>No movie data found</div>;
  }

  return (
    <div className="details-container">
      <div className="movie-info">
        <h1 className="details-ff">
          {Title}
          {' '}
          (
          {Year}
          )
        </h1>
        <img className="movie-poster" src={Poster} alt={`${Title} poster`} />
        <div className="details-info-container">
          {[{ Runtime }, { Genre }, { Actors }, { Plot }, { Awards }].map((value) => (
            <div className="details-info-row" key={uuidv4()}>
              <h3 className="details-ff details-fwb">
                {Object.keys(value)}
                :
              </h3>
              <div style={{ paddingTop: '6px' }}>
                <p className="details-ff details-fwl" style={{ paddingLeft: '10px' }}>
                  {Object.values(value)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3 className="details-ff details-fwb">Ratings</h3>
      <div className="ratings">
        {Ratings.map((rating) => (
          <div key={rating.Source} className="rating">
            <p className="details-ff" style={{ lineHeight: '10px' }}>
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
