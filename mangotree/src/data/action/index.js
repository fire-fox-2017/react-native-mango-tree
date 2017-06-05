
export const ADD_DATA = "ADD_DATA";

export function adddata(data) {
  return {
    type: ADD_DATA,
    username:data.username,
    nametree:data.nametree
  };
}
