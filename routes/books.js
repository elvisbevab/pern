import express from 'express';
import {
  getAllBooks,
  getBook,
  createBook,
  deleteBook,
} from '../controllers/books.js';

export const booksRouter = express.Router();

booksRouter.get('/', getAllBooks);
booksRouter.get('/:id', getBook);
booksRouter.post('/', createBook);
booksRouter.delete('/:id', deleteBook);
