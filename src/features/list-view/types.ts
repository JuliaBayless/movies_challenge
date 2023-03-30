import { Movie } from "../../../server/types";

export type PagingOptions = {
    page: number;
}

interface SearchParams {
    query: string;
    year?: string | number;
    type?: string | string[];
}

