const initialState = {
    searchQuery: '',
    filteredBy: 'all'

};

const filter = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                ...state,
                filteredBy: action.payload
            }
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            }
        default:
            return state;
    }
}

export default filter;