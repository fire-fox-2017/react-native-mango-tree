import * as actionType from './constants';

export const getNamesSuccess = (name, plantName) => ({
  type: actionType.GET_NAMES_SUCCESS,
  payload: { name, plantName },
});

export const growSuccess = () => ({
  type: actionType.GROW_SUCCESS,
});

export const harvestSuccess = () => ({
  type: actionType.HARVEST_SUCCESS,
});
