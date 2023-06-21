import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function BookForm() {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    description: '',
    category: '',
    cover_url: '',
    publishedAt: '',
    isActive: '',
  });

  return (
    <Container>
      <Form>
        <Row>
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

        <Row>
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

        <Row>
          <Col>
            <Form.Check
              // prettier-ignore
              type='switch'
              id='custom-switch'
              label='Check this switch'
            ></Form.Check>
          </Col>
          <Col>
            <Button className='mb-4' type='submit'>
              Submit Form
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default BookForm;
