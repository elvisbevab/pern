import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getApiData } from '../client';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { deleteBook } from '../client';

function Book() {
  const [book, setBook] = useState({});
  const location = useLocation();

  useEffect(() => {
    // console.log(location);
    getApiData(location.pathname, setBook);
  }, []);

  const handleDeleteButton = (event) => {
    event.preventDefault;
    deleteBook(location.pathname);
  };

  const keyNames = Object.keys(book);
  // console.log(`book: ${book}`);
  // console.log(`keyNames: ${keyNames}`);

  const booksTable = keyNames.map(
    (key) =>
      key != 'id' &&
      key != 'isactive' && (
        <tr>
          <td>{key}</td>
          <td>{book[key]}</td>
        </tr>
      )
  );
  return (
    <Container className='book-container'>
      <Row className='book d-flex justify-content-around'>
        <Col className='text-center' md='4'>
          <h2>{book.title}</h2>
          <h4>Written by: {book.author}</h4>
          <p>{book.description}</p>
          <Button
            className='my-4'
            variant='danger'
            onClick={handleDeleteButton}
          >
            DELETE
          </Button>
        </Col>
        <Col className='h-100 d-flex' md='4'>
          <img className='book-img' src={book.cover_url} alt='' />
        </Col>
      </Row>
    </Container>
  );
}

export default Book;
