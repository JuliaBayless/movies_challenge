import { useState } from 'react';
import { PagingOptions } from '../../api/types';
// import { SearchParams } from './types';

export default function useListMovies() {
  const [pagingOptions, setPagingOptions] = useState<PagingOptions>({
    page: 1,
    page_size: 10,
  });
  const [search, setSearch] = useState<string>('');

  const onSearchComplete = (newSearch: string): void => {
    setSearch(newSearch);
    setPagingOptions({ page: 1, page_size: 10 });
  };
  // const onSearchComplete = (newSearch: string):void => {
  //   const buildQuery = buildSearch(search);
  //   return buildQuery;
  // };

  return {
    search,
    onSearchComplete,
    pagingOptions,
    setPagingOptions,
  };
}
