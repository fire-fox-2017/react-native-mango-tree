
let random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

export const addGrow = () => {
	return dispatch => {
		return dispatch({
			type : 'ADD_GROW',
			payload: random
		})
	}
}
