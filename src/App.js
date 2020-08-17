import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ListOfBooks from './components/books/ListOfBooks';
import Pagination from './components/UI/Pagination';
import './App.scss';

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);

  const url = 'http://nyx.vima.ekt.gr:3000/api/books';

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const res = await axios.post(url);
      setBooks(res.data.books);
      setLoading(false);
    }

    fetchBooks();
  }, []);

  // get current books
  const indexOfLastPage = currentPage * booksPerPage;
  const indexOfFirstPage = indexOfLastPage - booksPerPage;
  const currentBooks = books.slice(indexOfFirstPage, indexOfLastPage);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className="text-primary mb-3">My Books</h1>
      <Pagination booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate}/>
      <ListOfBooks books={currentBooks} loading={loading}/>
    </div>
  );
}

export default App;
