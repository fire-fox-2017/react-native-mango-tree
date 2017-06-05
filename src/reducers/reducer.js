const initialState = {
	name : 'edim',
	treeName: 'Mangoo',
	total : 0,
	age: 0,
}

const addGrow = (state, data) => {
	let newData = {
		total: state.age >= 10 ? state.total += data : 0,
		age: state.age == 20 ? state.age += 0 : state.age += 1,
	}
	let newState = {
		...state, newData
	}
	return newState


}

const Reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FETCH_DATA': {
			return fetchData(state, payload)
			break;
		}
		case 'ADD_GROW': {
			return addGrow(state, payload)
			break;
		}
		default: return state
	}
}

export default Reducer
