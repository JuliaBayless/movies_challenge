import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('test!');
});

app.get('/movies/:title', (req, res) => {
    const apiKey = process.env.API_KEY;
    const title = req.params.title;

    axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`)
      .then(response => {
        res.send(response.data);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  });

  const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});