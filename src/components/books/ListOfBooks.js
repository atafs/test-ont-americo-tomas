import React from 'react';

import Book from './Book';
import './ListOfBooks.scss';

const ListOfBooks = ({books, loading}) => {
    if (loading) {
        // TODO we could add a spinner, content loader or something
        return <h2>Loading...</h2>
    }

    return (
        <div className="list-group mb-4">
            {books.map(book => (
                <Book key={book.id} className="list-group-item" book={book}/>
            ))}
        </div>
    )    
};

export default ListOfBooks;