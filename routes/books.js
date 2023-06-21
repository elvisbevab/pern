import express from 'express';
import { getAllBooks } from '../controllers/books.js';

export const booksRouter = express.Router();

booksRouter.get('/', getAllBooks);
