const initialState = {
    items: []

};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK_TO_CART':
            let newBookInCart = {
                id: action.book.id,
                title: action.book.title,
                author: action.book.author,
                image: action.book.image,
                price: action.book.price,
                rating: action.book.rating,
                randomID: action.randomID
            }
            return {
                ...state,
                items: [...state.items, newBookInCart]
            }

        case 'REMOVE_BOOK_FROM_CART':
            return {
                ...state,
                items: state.items.filter(i => i.randomID !== action.payload)
            }

        default:
            return state;
    }
}

export default cart;