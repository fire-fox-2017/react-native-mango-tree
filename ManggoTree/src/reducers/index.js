import { combineReducers } from 'redux';

import Harvest from './Listharverst';

const rootReducer = combineReducers({
  statusharverst : Harvest
})

export default rootReducer