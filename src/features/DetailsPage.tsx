import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../api/movies.queries';
import Details from './details-view/MovieDetails';

export default function DetailsPage() {
  const { id } = useParams<{ id: string }>();

  const {
    movie, isError, isLoading,
  } = getMovie(id);

  if (isLoading) {
    return <span className="error-message">Loading...</span>;
  }

  if (isError) {
    return (
      <span className="error-message">
        Error: Please try again later
      </span>
    );
  }

  return (
    <div>
      {movie.Title ?
        <Details movieDetails={movie} />
        :
        <h2 className="error-message">No Movie Found, Please Try Again</h2>}
    </div>
  );
}
