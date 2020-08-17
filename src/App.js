import React, { useState, useEffect } from 'react';
import ListOfBooks from './components/ListOfBooks';

import './App.scss';

const App = () => {
  const [userBooks, setUserBooks] = useState([]);

  const url = 'http://nyx.vima.ekt.gr:3000/api/books';

  useEffect(() => {
    fetch(url, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(responseData => {
        const {books} = responseData;
        setUserBooks(books);
      })
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ListOfBooks books={userBooks} />
      </header>
    </div>
  );
}

export default App;
