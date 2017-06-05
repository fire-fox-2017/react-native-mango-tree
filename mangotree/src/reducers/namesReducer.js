import * as actionType from '../actions/constants';

const getNames = (state, names) => {
  return names;
};

const namesReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.GET_NAMES_SUCCESS: return getNames(state, action.payload);
    default: return state;
  }
};

export default namesReducer;
