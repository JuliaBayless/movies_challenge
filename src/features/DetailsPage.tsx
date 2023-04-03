import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../api/movies.queries';
import Details from './details-view/MovieDetails';
import './DetailsPage.css';
// import { MovieDetails } from '../api/types';

export default function DetailsPage() {
  const { id } = useParams<{ id: string }>();

  const {
    movie, error, isLoading, isFetching,
  } = getMovie(id);
  console.log('Details', id, movie, error, isLoading, isFetching);
  return (
    <div>
      {movie ?
        <Details movieDetails={movie} />
        :
        <h2>No Movie Found, please try again</h2>}
    </div>
  );
}
