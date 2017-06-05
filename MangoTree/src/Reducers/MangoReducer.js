const MangoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NAME":
      let randAge = Math.floor(Math.random() * 10 + 20);
      let harvestTime = Math.floor(Math.random() * randAge + 1);
      let naming = {
        name: action.payload.name,
        plantName: action.payload.plantName,
        age: 0,
        MaxAge: randAge,
        Fruit: 0,
        harvest: 0,
        harvestAge: harvestTime,
        status: "alive"
      };
      state = naming;
      break;
    case "GROW":
      let stat = state.status;
      let totalFruit = 0;
      let count = state.age + 1;
      if (state.age >= state.maxAge) {
        stat = "dead";
      } else {
        if (state.harvestAge <= count) {
          let randFruit = Math.floor(Math.random() * 5 + 1);
          totalFruit = state.Fruit + randFruit;
        }
      }
      state = { ...state, age: count, Fruit: totalFruit, status: stat };
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
