import * as actionType from '../actions/constants';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getAge = (state = [], data) => {
  const newAge = getRandomIntInclusive(2, 5);
  const newState = [...state, newAge];
  return newState;
};
