import axios from 'axios';

export const setBooks = (books) => ({
    type: 'SET_BOOK',
    payload: books
});

export const getAllBooks = () => {                 //thunk creator
    return (dispatch) => {                                  //thunk
        axios.get('/books.json').then((response) => {
            dispatch(setBooks(response.data));
        })
    }
}