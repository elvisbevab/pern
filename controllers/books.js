import { pool } from '../db.js';

/**
 * Return all books of the database
 * @param {*} req
 * @param {*} res
 */
export const getAllBooks = async (req, res) => {
  try {
    console.log('get All Books');
    const { rows, rowCount } = await pool.query(
      'SELECT id, title, author, category, cover_url FROM books;'
    );
    res.status(200).json(rows);
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
    const { rows, rowCount } = await pool.query(
      'SELECT * FROM books WHERE id=$1',
      [req.params.id]
    );
    console.log(rows);
    res.status(200).json(rows[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('something went wrong');
  }
};

export const createBook = async (req, res) => {
  try {
    console.log('try post');
    const {
      title,
      author,
      description,
      category,
      cover_url,
      publishedat,
      isactive,
    } = req.body;

    console.log(author);
    const { rows } = await pool.query(
      'INSERT INTO books (title, author,description, category, cover_url,publishedAt,isActive) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;',
      [title, author, description, category, cover_url, publishedat, isactive]
    );

    res.status(201).json(rows[0]);

    // res.send(req.body);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('something went wrong');
  }
};
