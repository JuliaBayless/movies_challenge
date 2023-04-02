import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('test!');
});

// grabs single movie
app.get('/movie/:id', async (req, res) => {
  const apiKey = process.env.API_KEY;
  const { id } = req.params;
  const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
  res.json(response.data);
});

// search grabs list using query
app.get('/movies', async (req, res) => {
  const apiKey = process.env.API_KEY;
  const { search = '', page = 1, type } = req.query;

  // Build the query string
  let queryString = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}&page=${page}`;

  // Add the 'type' parameter
  if (type) {
    queryString += `&type=${type}`;
  }

  try {
    const response = await axios.get(queryString);
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching data from OMDB API: ${error}`);
    res.status(500).json({ error: 'Error fetching data from OMDB API' });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
