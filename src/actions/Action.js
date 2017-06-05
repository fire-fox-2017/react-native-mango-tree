import axios from 'axios';

let data =
	{ name : 'edim',
		treeName: 'Mangoo',
		total : 0,
		harvest: 0,
		age: 0,
	}

export const fetchData = () => ({
	return dispatch =>
		return dispatch({
			type: 'FETCH_DATA',
			payload: data
		})
})
