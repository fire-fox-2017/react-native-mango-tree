import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import treeReducer from '../reducers/treeReducer'

const middlewares = applyMiddleware(logger, thunk)

const store = createStore(treeReducer, compose(
    middlewares,
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store