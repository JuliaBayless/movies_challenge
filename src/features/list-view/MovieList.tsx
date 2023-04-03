/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Movie } from '../../api/types';
import Card from '../../components/Card';
import './MovieList.css';

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Card key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
