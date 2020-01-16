import React from 'react';
import { Menu, Popup, Message, Button } from 'semantic-ui-react';
import Cart from './Cart';

const MenuComponent = (props) => {
    let style = {
        minwidth: '300px',
        maxwidth: '700px'
    }
    return (
        <Menu>
            <Menu.Item name='browse' >
                Магазин книг
        </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item name='signup' >
                    Итого: <b>{props.totalPrice}</b> грн.
          </Menu.Item >
                <Popup trigger={
                    <Menu.Item name='help' >
                        Корзина <b>({props.count})</b>
                    </Menu.Item>
                }
                    style={style}
                    flowing
                    hideOnScroll
                    on='click'
                    content={props.count
                        ? <div>{props.books.map(book => <Cart key={book.randomID} {...book} count={props.count} removeFromCart={props.removeFromCart} />)} <Button color='green'>Заказать</Button></div>
                        : <Message color='green'>Корзина пустая</Message>} />
            </Menu.Menu>
        </Menu>
    )
}


export default MenuComponent;