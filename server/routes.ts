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
app.get('/movie/:title', async (req, res) => {
  const apiKey = process.env.API_KEY;
  const { title } = req.params;
  const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
  res.json(response.data);
});

// search grabs list using query
app.get('/movies', async (req, res) => {
  const apiKey = process.env.API_KEY;
  const { search } = req.query;
  console.log('PING', search);
  const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`);
  console.log(response.data);
  res.json(response.data);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
