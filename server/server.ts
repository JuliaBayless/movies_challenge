import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('test!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});