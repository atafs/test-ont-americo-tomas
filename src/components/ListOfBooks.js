import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Book from './Book';

import './ListOfBooks.scss';

const ListOfBooks = ({books}) => {
    return (
        <Container>
            <Row>
                <Col>
                    {books.map(book => (
                        <Book key={book.id} book={book}/>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default ListOfBooks;