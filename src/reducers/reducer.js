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
		...state, ...newData
	}
	return newState
}

const signin = (state, data) => {
	let newData = {
		name: data.name,
		treeName: data.treeName,
	}

	let newState = {
		...state, ...newData
	}
	console.log('Reducer', newState)
	return newState
}

const Reducer = (state = initialState, { type, payload }) => {
	switch (type) {
			case 'SIGNIN': {
			return signin(state, payload)
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
