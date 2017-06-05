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
      return {...state, name: action.details.name, owner: action.details.owner}
    case actionType.GROW_TREE:
      if(action.tree.age < 0.6 * state.maximum_age){
        action.tree.age += 1;
        return action.tree;
      } else if ( action.tree.age > state.maximum_age){
        return initialState;
      } else {
        action.tree.age += 1;
        action.tree.fruit += Math.floor(Math.random() * (7)) + 1;
        return action.tree;
      }
    default:
      return state;
  }
}

export default reducer