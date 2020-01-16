export const addToCart = (book, randomID) => ({
    type: 'ADD_BOOK_TO_CART',
    book: book,
    randomID: randomID
});

export const removeFromCart = (bookId) => ({
    type: 'REMOVE_BOOK_FROM_CART',
    payload: bookId
});