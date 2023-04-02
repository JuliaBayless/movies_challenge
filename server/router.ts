import { Router } from 'express';
import axios from 'axios';
import { fetchMovies } from './service.js';
import { SearchParams } from './types.js';

const router = Router();

// search movies in OMDb
router.get('/', async (req, res) => {
  try {
    const data = await fetchMovies(req.query as SearchParams);
    res.json(data);
  } catch (error) {
    console.error(`Error fetching data from OMDB API: ${error}`);
    res.status(500).json({ error: 'Error fetching data from OMDB API' });
  }
});

// grabs single movie
router.get('/movie/:title', async (req, res) => {
  const apiKey = process.env.API_KEY;
  const { title } = req.params;
  const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
  res.json(response.data);
});

export default router;
