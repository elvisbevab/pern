import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getApiData } from '../client';
import { Button } from 'react-bootstrap';
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
    <>
      <table>
        <tbody>{booksTable}</tbody>
      </table>
      <Button className='my-4' variant='danger' onClick={handleDeleteButton}>
        DELETE
      </Button>
    </>
  );
}

export default Book;
