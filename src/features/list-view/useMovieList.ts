import { useState } from 'react';
// import { SearchParams } from './types';

export default function useListMovies() {
  // const [searchParams, setSearchParams] = useState<SearchParams>({});
  // const [query, setQuery] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  // const onSearchComplete = (newSearch: string):void => {
  //   const buildQuery = buildSearch(search);
  //   return buildQuery;
  // };

  return {
    search,
    // onSearchComplete,
    setSearch,
    // setSearch: (search: string) =>
    //   setSearchParams((params) => ({ ...params, search })),
    // setFilter: (filter: SearchParams) => setSearchParams(filter),
  };
}
