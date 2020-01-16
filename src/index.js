import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/AppContainer';

import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import store from './store';


// setTimeout(() => {
//     store.dispatch({ type: "SET_BOOK", payload: [{ id: 0, title: 'Hello World' }] })
// }, 1000)

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
    , document.getElementById('root'));
