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

interface SearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

interface SearchParams {
  query: string;
  year?: string | number;
  type?: string | string[];
  page?: number;
}