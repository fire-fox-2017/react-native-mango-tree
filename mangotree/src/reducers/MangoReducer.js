const initialState = {
  data: {
    name: '',
    tree_name: '',
    max_age: 10
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const MangoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SOMETHING': {
      return state
    }
    case 'GAME_START': {
      console.log("GAME_START")
      console.log(action.data.name)
      return {...state, name: action.data.name }
    }
    default: return state

  }
}

export default MangoReducer
