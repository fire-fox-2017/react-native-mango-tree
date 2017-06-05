import { combineReducers } from 'redux';

import Harvest from './Harvest';

const rootReducer = combineReducers({
  harvestStatus : Harvest
})

export default rootReducer