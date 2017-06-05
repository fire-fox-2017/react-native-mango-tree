import {
  GAME_START,
  GAME_OVER,
  HARVEST
} from '../actions/constants'


const initialState = {
  name: '',
  tree_name: '',
  max_age: 10,
  increment_age: 5,
  age: 0,
  harvested: 0
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const MangoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SOMETHING': {
      return state
    }
    case GAME_START: {
      console.log("GAME_START")
      console.log(action.data.name)
      const max_age = getRandomInt(10,20)
      console.log("random max age", max_age)

      return {...state, name: action.data.name, max_age: max_age }
    }
    case GAME_OVER: {

      return {...state, age: action.age}
    }
    case HARVEST: {
      console.log("HARVEST")
      console.log(action.fruits)
      const total = state.harvested + action.fruits
      return {...state, harvested: total }
    }
    default: return state

  }
}

export default MangoReducer
