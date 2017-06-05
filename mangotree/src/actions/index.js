import * as actionType from './constants';

const getAgeSuccess = age => ({
  type: actionType.GET_AGE_SUCCESS,
  age,
});

export const getAge = () => {
  return (dispatch) => {
    dispatch(getAgeSuccess());
  };
};
