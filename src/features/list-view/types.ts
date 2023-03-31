import { Movie } from "../../../server/types";


export interface SearchParams {
    title: string;
    year?: string | number;
    type?: string | string[];
    page?: number;
}

