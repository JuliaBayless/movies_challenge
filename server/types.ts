export interface Movie {
  imdbID: string;
  Title: string,
  Year: string,
  Runtime: string,
  Ratings: RatingItem[],
  Poster: string;
  Genre: string;
  Actors: string;
  Plot: string;
  Awards: string;
}

export interface RatingItem {
  Source: string,
  Value: string
}

export interface SearchResponse {
  Search: Movie[];
  totalResults: number;
  Response: string;
}

export interface SearchParams {
  query: string;
  type?: MediaType;
  page?: number;
}

export enum MediaType {
  MOVIE = 'movie',
  SERIES = 'series',
  EPISODE = 'episode',
}
