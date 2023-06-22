import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function MyCard({ book }) {
  return (
    <Container>
      <Row className='book-list-item d-flex'>
        <Col md='8'>
          <h3>{book.title}</h3>
          <span className='mb-2 text-muted'>{book.author}</span>
          <p className=''>{book.category}</p>
          <a href={`/books/${book.id}`}>
            <Button>Show More</Button>
          </a>
        </Col>
        <Col className='h-100' md='4'>
          <img
            className='book-list-img'
            src={book.cover_url}
            alt='Cover Picture'
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MyCard;
