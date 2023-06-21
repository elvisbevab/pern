import { pool } from '../db.js';

/**
 * Return all books of the database
 * @param {*} req
 * @param {*} res
 */
export const getAllBooks = async (req, res) => {
  try {
    console.log('get All Books');
    res.send('here are all books');
  } catch (error) {
    console.log(error.message);
    res.status(500).send('something went wrong');
  }
};

/**
 * returns the one book with the id, given in the params
 * @param {*} req
 * @param {*} res
 */
export const getBook = async (req, res) => {
  try {
    console.log('getBook');
    res.send(`here ist the book ${req.params.id}`);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('something went wrong');
  }
};
