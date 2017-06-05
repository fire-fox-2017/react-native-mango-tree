import store from './configureStore';

export const isHealthy = (age) => {
  if (age >= store.getState().maxAge) {
    return {
      type: 'IS_HEALTHY',
      payload: false
    };
  }
  return {
    type: 'IS_HEALTHY',
    payload: true
  };
}

export const addAge = () => {
  console.log(store.getState());
  return {
    type: 'ADD_AGE',
  }
}

export const bearFruit = (age) => {
  let fruits = 0;
  if (age >= store.getState().bearingAge) {
    fruits = Math.floor(Math.random()*20) + 10;
  }
  return {
    type: 'BEAR_FRUIT',
    payload: fruits,
  }
}

export const harvestFruit = () => {
  return {
    type: 'HARVEST_FRUIT',
  }
}

export const initiate = (username, treeName) => {
  const maxAge = Math.floor(Math.random()*5) + 15;
  const bearingAge = Math.floor(Math.random()*3) + 3;
  return {
    type: 'INITIATE',
    payload: {
      maxAge,
      bearingAge,
      username,
      treeName
    }
  }
}
