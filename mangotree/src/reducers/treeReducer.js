import * as actionType from '../actions/constants';

const startGame = (state = [], action) => {
  const randAge = Math.floor(Math.random() * 10 + 20);
  const harvestTime = Math.floor(Math.random() * randAge + 1);
  const names = {
    name: action.payload.name,
    plantName: action.payload.plantName,
    age: 0,
    maxAge: randAge,
    fruit: 0,
    harvest: 0,
    harvestAge: harvestTime,
    status: 'alive',
  };
  state = names;
  return state;
};

const grow = (state = [], action) => {
  let stat = state.status;
  let totalFruit = 0;
  let count = state.age + 1;
  if (state.age >= state.maxAge) {
    count -= 1;
    stat = 'dead';
  } else {
    if (state.harvestAge <= count) {
      const randFruits = Math.floor(Math.random() * 6 - 1);
      totalFruit = state.fruit + randFruits;
    }
  }
  state = { ...state, age: count, fruit: totalFruit, status: stat };
  return state;
};

const harvest = (state = [], action) => {
  const basket = state.harvest = state.fruit;
  state = { ...state, fruit: 0, harvest: basket };
  return state;
};

const treeReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.GET_NAMES_SUCCESS: return startGame(state, action);
    case actionType.GROW_SUCCESS: return grow(state, action.payload);
    case actionType.HARVEST_SUCCESS: return harvest(state, action.payload);
    default: return state;
  }
};

export default treeReducer;
