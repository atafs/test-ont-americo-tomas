import React from 'react';

import Card from '../UI/Card'
import './Book.scss';

const Book = ({ book }) => {
    const {
        book_author: author,
        book_title: title,
        book_publication_year: publicationYear,
        book_publication_country: publicationCountry,
        book_publication_city: publicationCity,
        book_pages: pages
    } = book;
    return (
        <Card>
            <h5>Author: {author}</h5>
            <h6>Title: {title}</h6>
            <br />
            <p>Publication Year: {publicationYear}</p>
            <p>Publication Country: {publicationCountry}</p>
            <p>Publication City: {publicationCity}</p>
            <p>Total pages: {pages}</p>
        </Card>
    );
};

export default Book;