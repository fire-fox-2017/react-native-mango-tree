import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'


import MangoApp from '../reducers'

const middlewares = applyMiddleware( logger )

const store = createStore(MangoApp, middlewares)

export default store
