export function addName(name, plantName) {
  return {
    type: "ADD_NAME",
    payload: {
      name,
      plantName
    }
  };
}

export function grow() {
  return {
    type: "GROW"
  };
}

export function harvest() {
  return {
    type: "harvest"
  };
}
