import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducers from '../reducer';

const middleware = applyMiddleware(logger, thunk);
const store = createStore(rootReducers, middleware);

export default store;