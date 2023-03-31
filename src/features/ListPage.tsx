import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../api/movies.queries";
import useListMovies from "./list-view/useListMovies";


export default function ListPage() {
    const {
        search,
        onSearchComplete
    } = useListMovies();

    const {
        isLoading,
        isError,
    } = useQuery(searchMovies(search));

    
}