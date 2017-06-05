const initialState = { data: []
};
const fetchData = (state, data) => {
	// const newState = { ...state, data };
	let newData = [
		{
			name : 'edim',
			treeName: 'Mangoo',
			total : 0,
			harvest: 0,
			age: 0,
		}
	]
	const newState = { ...state, newData };
	return newState;
};

const addGrow = (state, data) => {
	let newData = [
		{ name : 'edim',
			treeName: 'Mangoo',
			total : 0,
			harvest: 0,
			age: 0,
		}
	]
}

const Reducer = (state = [], { type, payload }) => {
	switch (type) {
		case 'FETCH_DATA': return fetchData(state, payload)
		break;
		case 'ADD_GROW': return addGrow(state, payload)
		break;
		default: return state
	}
	return {
		data: []
	}
}

export default Reducer
