import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react';
import './App.scss';
import FilterContainer from './containers/FilterContainer';
import MenuContainer from './containers/MenuContainer';
import BookCardContainer from './containers/BookCardContainer';


class App extends Component {

  componentDidMount() {
    this.props.getAllBooks();
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <MenuContainer />
        <FilterContainer />
        <main className="wrapper">
          <Card.Group itemsPerRow={4} >
            {
              !isReady ? "Загрузка"
                : books.map(book => (
                  <BookCardContainer key={book.id} {...book} />
                ))
            }
          </Card.Group>
        </main>
      </Container>
    )
  }

}

export default App;