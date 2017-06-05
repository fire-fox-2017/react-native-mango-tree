const MangoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NAME":
      let randAge = Math.floor(Math.random() * 10 + 20);
      let naming = {
        name: action.payload.name,
        plantName: action.payload.plantName,
        age: 0,
        MaxAge: randAge,
        Fruit: 0,
        harvest: 0
      };
      state = naming;
      break;
    case "GROW":
      let randFruit = Math.floor(Math.random() * 1 + 5);
      totalFruit = state.fruit + randFruit;
      let count = state.age + 1;
      state = { ...state, age: count, Fruit: totalFruit };
      break;
    case "HARVEST":
      let basket = state.harvest + state.Fruit;
      state = { ...state, Fruit: 0, harvest: basket };
      break;
    default:
      return state;
  }
  return state;
};

export default MangoReducer;
