
const fetchTree(payload) = (data)=>{
  
}

const harvest = (state={}, {type, payload}) => {
  console.log(type, 'direducer')
  switch (type) {
    case "FETCH_TREE": return fetchTree(payload)
    default: return state

  }
}

export default harvest