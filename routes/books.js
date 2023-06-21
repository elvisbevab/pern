import express from 'express';
import { getAllBooks, getBook } from '../controllers/books.js';

export const booksRouter = express.Router();

booksRouter.get('/', getAllBooks);
booksRouter.get('/:id', getBook);
