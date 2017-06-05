const setName = (state, data)=>{
  let maxAge = parseInt(Math.random() * (30 - 20) + 15)
  let harvest = parseInt(Math.random() * (19 - 15) + 15)
  let newState = {...state, name: data, grow: 0, harvest: harvest, maxAge: maxAge}
  return newState
}

const addAge = (state, data)=>{
  console.log('masuk')
  let growAge = parseInt(Math.random() * (5 - 1) + 1)
  let newState = {...state}
  newState['grow'] = newState.grow + growAge
  return newState
}

const Harvest = (state = {}, { type, payload }) => {
  console.log(payload, 'direducer')
  switch (type) {
    case 'SET_TREE': return setName(state, payload)
    case 'ADD_AGE': return addAge(state)
    default: return state
  }
}

export default Harvest;