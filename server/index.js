import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import movieRouter from './router.js';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());

// Use the movie router for the /movies endpoint
app.use('/api/movies', movieRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
   // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
