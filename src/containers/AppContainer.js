import { connect } from 'react-redux';
import * as booksActions from '../actions/books';
import * as filterActions from '../actions/filter';
import { bindActionCreators } from 'redux';
import App from '../App';

import orderBy from 'lodash/orderBy'  //устанвленная библиотека для сортировки

const sortBy = (books, filterBy) => {

    switch (filterBy) {
        case "all":
            return books;

        case "popular":
            return orderBy(books, 'rating', 'desc');

        case "price_high":
            return orderBy(books, 'price', 'desc');

        case "price_low":
            return orderBy(books, 'price', 'asc');

        case "author":
            return orderBy(books, 'author', 'asc');
        default:
            return books;
    }
}
const filterBook = (books, searchQuery) =>
    books.filter(
        item => item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
            || item.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    )

const searchBook = (books, filterBy, searchQuery) => {
    return sortBy(filterBook(books, searchQuery), filterBy)
}

const mapStateToProps = (state) => ({
    books: state.books.items && searchBook(state.books.items, state.filter.filteredBy, state.filter.searchQuery),
    isReady: state.books.isReady,

})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(booksActions, dispatch),          //передает диспатчи всех экшенов из books  actions
    ...bindActionCreators(filterActions, dispatch),         //передает диспатчи всех экшенов из filter  actions

})
export default connect(mapStateToProps, mapDispatchToProps)(App);
