import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../api/movies.queries';
import Details from './details-view/MovieDetails';
// import { MovieDetails } from '../api/types';

export default function DetailsPage() {
  const { id } = useParams<{ id: string }>();

  const { movie } = getMovie(id);
  return (
    <Details movie={movie} />
  );
}
