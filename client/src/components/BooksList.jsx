import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../client';

function BooksList() {
  const [booksList, setBooksList] = useState();
  const path = '/books';

  useEffect(() => {
    console.log(typeof getAllBooks);
    const books = getAllBooks(path);
    if (books == []) {
      console.log('setting');
      setBooksList(books);
    }
    console.log(`booksList: ${booksList}`);
  }, []);

  return <div>Hallo</div>;
}

export default BooksList;
