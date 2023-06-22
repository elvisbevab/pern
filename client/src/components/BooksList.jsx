import React, { useEffect, useState } from 'react';
import { getApiData } from '../client';
import { useLocation } from 'react-router-dom';
import BookForm from './BookForm';
import { Button } from 'react-bootstrap';

function BooksList() {
  const [booksList, setBooksList] = useState([]);
  const loacation = useLocation();

  useEffect(() => {
    getApiData(location.pathname, setBooksList);
    console.log(loacation.pathname);
  }, []);

  const booksItems = booksList.map((book) => (
    <li key={book.id}>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <h3>{book.category}</h3>
      <img src={book.cover_url} alt='Cover Image' />
      <a href={`${location.pathname}/${book.id}`}>
        <Button className='mb-4'>Show More</Button>
      </a>
    </li>
  ));

  return (
    <>
      <BookForm />
      <ul>{booksItems}</ul>;
    </>
  );
}

export default BooksList;
