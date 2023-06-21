import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Book() {
  const [book, setBook] = useState({});
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, []);
  return <div>Book</div>;
}

export default Book;
