import axios from 'axios';

export async function fetchMovies(query) {
  const apiKey = process.env.API_KEY;
  const { search = '', page = '1', type } = query;

  let queryString = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}&page=${page}`;

  if (type) {
    queryString += `&type=${type}`;
  }

  const response = await axios.get(queryString);
  return response.data;
}
