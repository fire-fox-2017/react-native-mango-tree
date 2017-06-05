const setName = (state, data)=>{
  let maxAge = parseInt(Math.random() * (15 - 10) + 10)
  let harvest = parseInt(Math.random() * (10 - 5) + 5)
  let newState = {...state, name: data, grow: 0, harvest: harvest, maxAge: maxAge}
  return newState
}

const addAge = (state, data)=>{
  let newState = {...state}
  newState['grow'] = newState.grow + 1
  return newState
}

const harvestResult = (state)=>{
  let getHarvest = parseInt(Math.random() * (7 - 1) + 1)
  let newState = {...state, harvestResult: getHarvest}
  console.log(newState)
  return newState
}

const Harvest = (state = {}, { type, payload }) => {
  console.log(payload, 'direducer')
  switch (type) {
    case 'SET_TREE': return setName(state, payload);
    case 'ADD_AGE': return addAge(state);
    case 'HARVEST': return harvestResult(state);
    default: return state;
  }
}

export default Harvest;