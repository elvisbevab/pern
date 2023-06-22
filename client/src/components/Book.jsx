import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getApiData } from '../client';
import { Button } from 'react-bootstrap';

function Book() {
  const [book, setBook] = useState({});
  const location = useLocation();

  useEffect(() => {
    // console.log(location);
    getApiData(location.pathname, setBook);
  }, []);

  const keyNames = Object.keys(book);
  // console.log(`book: ${book}`);
  // console.log(`keyNames: ${keyNames}`);

  const booksTable = keyNames.map((key) => (
    <tbody>
      <tr>
        <td>{key}</td>
        <td>{book[key]}</td>
      </tr>
    </tbody>
  ));
  return (
    <>
      <table>{booksTable}</table>
      <Button className='my-4' variant='danger'>
        DELETE
      </Button>
    </>
  );
}

export default Book;
