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
  let images = store.getState().images;
  let selectedImage = images[4];
  if (store.getState().age < store.getState().bearingAge) {
    if (store.getState().age < 3) {
      selectedImage = images[0];
    } else if (store.getState().age < 5) {
      selectedImage = images[1];
    } else {
      selectedImage = images[2];
    }
  } else if (store.getState().age >= store.getState().bearingAge) {
    selectedImage = images[3];
  } else {
    selectedImage = images[4];
  }
  console.log(store.getState());
  return {
    type: 'ADD_AGE',
    payload: selectedImage
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
  const bearingAge = Math.floor(Math.random()*3) + 8;
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
