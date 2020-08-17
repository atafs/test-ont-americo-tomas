import React from 'react';
import Card from 'react-bootstrap/Card';

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
        <Card style={{ color: 'black' }}>
            <Card.Body>
                <Card.Title>Author: {author}</Card.Title>
                <Card.Subtitle>Title: {title}</Card.Subtitle>
                <Card.Text>Publication Year: {publicationYear}</Card.Text>
                <Card.Text>Publication Country: {publicationCountry}</Card.Text>
                <Card.Text>Publication City: {publicationCity}</Card.Text>
                <Card.Text>Total pages: {pages}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Book;