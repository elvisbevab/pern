import React from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
function Home() {
  return (
    <Container fluid className='home p-0'>
      <Row className='h-100 justify-content-center'>
        <Col
          className='d-flex justify-content-center align-items-center'
          md='4'
        >
          <Row>
            <Col className='text-center'>
              <h1 className=''>Welcome to MyLibrary</h1>
              <a href='/books'>
                <Button variant='dark'> Show All Books </Button>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
