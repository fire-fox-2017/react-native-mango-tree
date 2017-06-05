import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers/';

const middlewares = applyMiddleware(logger, thunk);

export default createStore(reducers, compose(
  middlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
