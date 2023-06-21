import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { booksRouter } from './routes/books.js';

const app = express();
const port = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());
app.use('/api/books', booksRouter);

app.route('/').get((req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
