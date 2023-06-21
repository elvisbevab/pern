import React, { useEffect, useState } from 'react';
import { getApiData } from '../client';
import { useLocation } from 'react-router-dom';

function BooksList() {
  const [booksList, setBooksList] = useState([]);
  const loacation = useLocation();

  useEffect(() => {
    getApiData(location.pathname, setBooksList);
    console.log(loacation.pathname);
  }, []);

  return (
    <>
      {booksList.map((book) => (
        <div key={book.id}>
          <a href={`${location.pathname}/${book.id}`}>{book.title}</a>
        </div>
      ))}
    </>
  );
}

export default BooksList;
