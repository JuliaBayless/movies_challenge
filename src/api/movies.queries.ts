import axios from "axios";
import { Movie } from "../../server/types";


const searchMovies = (query: string) => ({
    refetchOnWindowFocus: false,
    queryKey: ['GET /movies'],
    queryFn: async () => {
        const response = await axios.get<{ Search: Movie[] }>(`${process.env.REACT_APP_SERVER_URL}/movies&${query}`)
        return response
    }
});

const getMovie = (title: string) => ({
    refetchOnWindowFocus: false,
    queryKey: ['GET /movie'],
    queryFn: async () => {
        const response = await axios.get<{ Search: Movie }>(`${process.env.REACT_APP_SERVER_URL}/movie/${title}`)
        return response.data;
    }
});

export { searchMovies, getMovie };