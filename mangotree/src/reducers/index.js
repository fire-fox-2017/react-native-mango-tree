import * as actionType from '../actions/constants';

const initialState = {
  age: 0,
  fruit: 0,
  harvested: 0,
  maximum_age: Math.floor(Math.random() * (21)) + 10,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.NEW_TREE:
      const newState = {}
      newState.age = initialState.age
      newState.fruit = initialState.fruit
      newState.harvested = initialState.harvested
      newState.maximum_age = initialState.maximum_age
      newState.name = action.details.name
      newState.owner = action.details.owner
      return newState
    case actionType.GROW_TREE:
      if(action.tree.age < 0.6 * state.maximum_age){
        const newState = {}
        newState.age = state.age
        newState.fruit = state.fruit
        newState.harvested = state.harvested
        newState.maximum_age = state.maximum_age
        newState.name = state.name
        newState.owner = state.owner
        newState.age += 1;
        return newState;
      } else if ( action.tree.age > state.maximum_age){
        return initialState;
      } else {
        const newState = {}
        newState.age = state.age
        newState.fruit = state.fruit
        newState.harvested = state.harvested
        newState.maximum_age = state.maximum_age
        newState.name = state.name
        newState.owner = state.owner
        newState.age += 1;
        newState.fruit += Math.floor(Math.random() * (7)) + 1;
        return newState;
      }
    case actionType.HARVEST_TREE:
      const newState2 = {}
      newState2.age = state.age
      newState2.fruit = 0
      newState2.harvested = state.fruit + state.harvested
      newState2.maximum_age = state.maximum_age
      newState2.name = state.name
      newState2.owner = state.owner
      return newState2
    default:
      return state;
  }
}

export default reducer