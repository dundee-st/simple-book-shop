import { combineReducers } from 'redux';
import books from './books'
import cart from './cart'
import filter from './filter'

let rootReducer = combineReducers({
    books,
    cart,
    filter
});

export default rootReducer;