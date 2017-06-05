

const Harvest = (state={}, {type, payload}) => {
  console.log(type, 'direducer')
  switch (type) {
    case "SET_TREE": return state
    default: return state
  }
}

export default Harvest