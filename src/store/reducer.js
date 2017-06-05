const initialState = {
  username: '',
  treeName: '',
  maxAge: 0,
  bearingAge: 0,
  age: 0,
  currentHarvest: 0,
  totalHarvest: 0,
  isHealthy: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INITIATE':
      return {
        ...state,
        age: 0,
        username: action.payload.username,
        treeName: action.payload.treeName,
        maxAge: action.payload.maxAge,
        bearingAge: action.payload.bearingAge
      }
    case 'ADD_AGE':
      return {
        ...state,
        age: state.age + 1
      }
    case 'IS_HEALTHY':
      return {
        ...state,
        isHealty: action.payload
      }
    case 'BEAR_FRUIT' :
      return {
        ...state,
        currentHarvest: action.payload
      }
    case 'HARVEST_FRUIT':
      return {
        ...state,
        totalHarvest: state.totalHarvest + state.currentHarvest,
        currentHarvest: 0,
      }
    default:
      return state
    }
}

export default reducer;
