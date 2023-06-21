import { pool } from '../db.js';

export const getAllBooks = async (req, res) => {
  try {
    console.log('get All Books');
  } catch (error) {
    console.log(error);
  }
};

export const getBook = async (req, res) => {
  try {
    console.log('getBook');
  } catch (error) {
    console.log(error);
  }
};
