import { Router } from 'express';
import axios from 'axios';
import { fetchMovies } from './service.js';

const router = Router();

// search movies in OMDb
router.get('/', async (req, res) => {
  try {
    const data = await fetchMovies(req.query);
    res.json(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fetching data from OMDB API: ${error}`);
    res.status(500).json({ error: 'Error fetching data from OMDB API' });
  }
});

// grabs single movie
router.get('/:id', async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const { id } = req.params;
    const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
    res.json(response.data);
  } catch (error) {
     // eslint-disable-next-line no-console
     console.error(`Error fetching data from OMDB API: ${error}`);
     res.status(500).json({ error: 'Error fetching data from OMDB API' });
  }

});

export default router;
