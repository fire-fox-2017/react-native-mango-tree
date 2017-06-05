import { createLogger } from "redux-logger";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import mangos from "../Reducers/MangoReducer";

const Middleware = applyMiddleware(createLogger(), thunk);

const store = createStore(
  combineReducers({ mangos }),
  {},
  compose(
    Middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
