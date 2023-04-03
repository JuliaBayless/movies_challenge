import { useState } from 'react';
import { MediaType, PagingOptions } from '../../api/types';

export default function useListMovies() {
  const [pagingOptions, setPagingOptions] = useState<PagingOptions>({
    page: 1,
    page_size: 10,
  });
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [filter, setFilter] = useState<MediaType | undefined>(undefined);

  const onSearchComplete = (newSearch: string): void => {
    setSearch(newSearch.trim().replace(/\s+/g, '_'));
    setPagingOptions({ page: 1, page_size: 10 });
  };

  const onFilterComplete = (newFilter: MediaType | undefined): void => {
    setFilter(newFilter);
    setPagingOptions({ page: 1, page_size: 10 });
  };

  return {
    filter,
    search,
    onSearchComplete,
    pagingOptions,
    setPagingOptions,
    onFilterComplete,
  };
}
