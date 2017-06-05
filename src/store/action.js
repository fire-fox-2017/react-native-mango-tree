import store from './configureStore';

export const isHealty = (age) => {
  if (age >= store.state.maxAge) {
    return false;
  }
  return true;
}

export const addAge = (age) => {
  return {
    type: 'ADD_AGE',
    payload: isHealthy(age + 1),
  }
}

export const bearFruit = (age) => {
  if (age >= store.state.bearingAge) {
    const fruits = Math.floor(Math.random()*20) + 10;
    return {
      type: 'BEAR_FRUIT',
      payload: fruits,
    }
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
