const initialState = {
    items: null,
    isReady: false,


};

const books = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOK':
            return {
                ...state,
                items: action.payload,
                isReady: true
            }

        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            }
        default:
            return state;
    }
}

export default books;