import { useState } from 'react';
import { SearchParams } from './types'

const buildSearch = (search: string = ''): string => {
  return search ? `&s=${search}` : '';
};

const buildFilter = ({ type, year, page }: SearchParams): string => {
  let url: string = '';

  if (year) {
    url += `&y=${year}`;
  }

  if (type) {
    if (Array.isArray(type)) {
      url += `&type=${type.join(',')}`;
    } else {
      url += `&type=${type}`;
    }
  }

  if (page) {
    url += `&page=${page}`;
  }

  return url;
};

export default function useListMovies() {
  const [searchParams, setSearchParams] = useState<SearchParams>({});

  const onSearchComplete = (): string => {
    const { title = '' } = searchParams;
    const query = buildSearch(title) + buildFilter(searchParams);
    return query;
  };

  return {
    search: searchParams.title,
    onSearchComplete,
    setSearch: (search: string) =>
      setSearchParams((params) => ({ ...params, search })),
    setFilter: (filter: SearchParams) => setSearchParams(filter),
  };
}

