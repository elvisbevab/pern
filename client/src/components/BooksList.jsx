import React, { useEffect, useState } from 'react';
import { getApiData } from '../client';
import { useLocation } from 'react-router-dom';
import BookForm from './BookForm';
import { Button, Container, Col } from 'react-bootstrap';
import MyCard from './MyCard';

function BooksList() {
  const [booksList, setBooksList] = useState([]);
  const loacation = useLocation();

  useEffect(() => {
    getApiData(location.pathname, setBooksList);
    console.log(loacation.pathname);
  }, []);

  const booksItems = booksList.map((book) => (
    <Col md='6'>
      <MyCard book={book}></MyCard>
    </Col>
  ));

  return (
    <>
      <BookForm />
      <Container>{booksItems}</Container>
    </>
  );
}

export default BooksList;
