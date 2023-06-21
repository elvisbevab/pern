import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BooksList from './components/BooksList';
import Book from './components/Book';
import CreateBook from './components/CreateBook';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/books' element={<BooksList />}></Route>
        <Route path='/books/:id' element={<Book />}></Route>
        <Route path='/create' element={<CreateBook />}></Route>
      </Routes>
    </>
  );
}

export default App;
