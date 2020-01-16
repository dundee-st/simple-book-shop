import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';
import thunkMiddlewear from 'redux-thunk';

let store = createStore(rootReducer, applyMiddleware(logger, thunkMiddlewear));

export default store;

