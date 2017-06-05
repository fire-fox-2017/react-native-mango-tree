const setName = (state, data)=>{
  let maxAge = Math.random() * (25 - 20) + 20;
  let newState = {...state, name: data, grow: 0, maxAge: maxAge}
  return newState
}

const Harvest = (state = {}, { type, payload }) => {
  console.log(payload, 'direducer')
  switch (type) {
    case 'SET_TREE': return setName(state, payload)
    default: return state
  }
}

export default Harvest;