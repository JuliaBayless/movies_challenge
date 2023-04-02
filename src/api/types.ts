export type PagingOptions = {
  page: number;
  page_size: number;
};

export type Page = PagingOptions & {
  total_count: number;
  items: Movie[];
};

export enum MediaType {
  MOVIE = 'movie',
  SERIES = 'series',
  EPISODE = 'episode',
}

export interface SearchParams {
  search?: string;
  type?: MediaType;
  page?: number;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieDetails {
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
  Type: string;
}

export interface RatingItem {
  Source: string,
  Value: string
}