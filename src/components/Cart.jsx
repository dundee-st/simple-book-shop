import React from 'react';
import { Button, Image, List } from 'semantic-ui-react';

const Cart = ({ title, randomID, image, price, removeFromCart }) => {
    return (
        <List divided selection verticalAlign='middle'>
            <List.Item>
                <List.Content floated='right'>
                    <Button onClick={() => removeFromCart(randomID)} color='red'>Удалить</Button>
                </List.Content>
                <Image floated='left' avatar src={image} />
                <List.Content floated='left' >{title}</List.Content>
                <List.Content floated='right'><b>{price}</b>грн.</List.Content>
            </List.Item>
        </List>
    )
}

export default Cart;