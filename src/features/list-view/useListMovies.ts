import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { SearchParams } from './types'

export default function useListMovies() {
    const [ search, setSearch ] = useState<string | undefined>(undefined);

    const onSearchComplete = ({type, year, page}: SearchParams ): string | void => {
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
          setSearch(url);
    }
    return {
      search,
      onSearchComplete
    }
}
