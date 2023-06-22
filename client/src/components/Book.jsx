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
    <Container className='book-container d-flex justify-content-center align-items-center'>
      <Row className='book d-flex justify-content-around'>
        <Col
          className='d-flex flex-column text-center justify-content-around'
          md='4'
        >
          <Row>
            <h2 className='fs-1'>{book.title}</h2>
            <h4>Written by: {book.author}</h4>
          </Row>
          <Row>
            <p>{book.description}</p>
          </Row>

          <Row>
            <p>Category: {book.category}</p>
            <p>Published at: {book.publishedat}</p>
          </Row>
          <Row>
            <Button
              className='my-4 fw-bolder'
              variant='danger'
              onClick={handleDeleteButton}
            >
              DELETE
            </Button>
          </Row>
        </Col>
        <Col className='h-100 d-flex justify-content-center' md='4'>
          <img className='book-img' src={book.cover_url} alt='' />
        </Col>
      </Row>
    </Container>
  );
}

export default Book;
