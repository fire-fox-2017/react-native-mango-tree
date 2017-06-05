import { combineReducers } from 'redux';

import harvest from './Harvest'

const rootReducer = combineReducers({
  harvestStatus : harvest
})

export default rootReducer