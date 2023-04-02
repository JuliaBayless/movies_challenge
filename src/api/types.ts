import { Movie } from '../../server/types';

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
