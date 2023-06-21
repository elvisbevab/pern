import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getApiData } from '../client';

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
    <tr>
      <td>{key}</td>
      <td>{book[key]}</td>
    </tr>
  ));
  return <table>{booksTable}</table>;
}

export default Book;
