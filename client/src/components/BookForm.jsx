import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { addBook } from '../client';
import { useLocation } from 'react-router-dom';

function BookForm() {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    description: '',
    category: '',
    cover_url: '',
    publishedat: '',
    isactive: false,
  });
  const loacation = useLocation();

  const handleChange = (event) => {
    console.log(event.target);
    if (event.target.id == 'isactive') {
      const { id, checked } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [id]: checked }));
    } else {
      const { id, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    console.log(formData);
    addBook(loacation.pathname, formData);
  };

  return (
    <Container className='mt-3'>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <Row className='py-3'>
          <Form.Group as={Col} md='4' controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Lord of the Rings'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='4' controlId='author'>
            <Form.Label>Author</Form.Label>
            <Form.Control required type='text' placeholder='Thomas Mann' />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='4' controlId='category'>
            <Form.Label>Category</Form.Label>
            <Form.Control required type='text' placeholder='Fantasy' />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className='py-3'>
          <Form.Group as={Col} md='4' controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='A stupid hero saves the world'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='4' controlId='publishedat'>
            <Form.Label>Published at</Form.Label>
            <Form.Control required type='text' placeholder='Penguin Books' />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='4' controlId='cover_url'>
            <Form.Label>Cover URL</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='http://nice-cover.com/cover.jpg'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className='py-3'>
          <Col className='d-flex justify-content-end align-items-center'>
            <Form.Check
              // prettier-ignore
              type='checkbox'
              id='isactive'
              label='Is Active?'
            ></Form.Check>
          </Col>
          <Col className='d-flex align-items-center'>
            <Button type='submit'>Add Book</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default BookForm;
