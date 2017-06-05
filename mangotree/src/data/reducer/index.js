import {ADD_DATA} from "../action";

const initialState = {
  username:"",
  nametree:"",
  score:""
};

function Chart(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return Object.assign({}, state, {username: action.username,nametree: action.nametree});
    default:
      return state;
  }
}

export default Chart;
