import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../api/movies.queries";
import useListMovies from "./list-view/useMovieList";
import SearchBar from "../components/Searchbar";
import React from "react";


export default function ListPage() {
    const {
        search,
        onSearchComplete
    } = useListMovies();

    const { isLoading, error, data } = useQuery(['GET /movies', onSearchComplete], searchMovies(onSearchComplete));

    return(
        <div>
            <SearchBar setSearch={onSearchComplete} />
        </div>
    )
}