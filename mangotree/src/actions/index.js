import * as actionType from './constants';

export const getAgeSuccess = age => ({
  type: actionType.GET_AGE_SUCCESS,
  payload: age,
});

export const getAge = () => {
  return (dispatch) => {
    dispatch(getAgeSuccess());
  };
};

export const getNamesSuccess = names => ({
  type: actionType.GET_NAMES_SUCCESS,
  payload: names,
});

export const getNames = () => {
  return (dispatch) => {
    dispatch(getNamesSuccess());
  };
};
