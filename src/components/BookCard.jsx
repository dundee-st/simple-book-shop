import React, { Component } from 'react';
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react';

const BookCard = (book) => {
    const { title, author, price, image, addToCart, addedCount, rating } = book;
    const onAdd = () => {
        let randomID = Math.floor(Math.random() * Math.floor(100000));
        addToCart(book, randomID)
    }
    return (
        <Card>
            <Image src={image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>
                <Card.Description>
                    <Rating icon='star' defaultRating={rating} maxRating={5} /></Card.Description>
            </Card.Content>

            <Card.Content extra>
                <a>
                    <Icon name='money bill alternate' />
                    {price} грн
                </a>
            </Card.Content>
            <Button color="green" onClick={onAdd}>Добавить в корзину {addedCount > 0 && `(${addedCount})`}</Button>
        </Card>
    );
}

export default BookCard;