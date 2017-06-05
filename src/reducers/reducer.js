const initialState = { data: []
};
const fetchData = (state, data) => {
	// const newState = { ...state, data };
	return newState;
};

const Reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FETCH_DATA': return fetchData(state, payload)
		break;
		default: return state
	}
	return {
		data: []
	}
}

export default Reducer
