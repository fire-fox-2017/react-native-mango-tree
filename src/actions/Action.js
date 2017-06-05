// import axios from 'axios';

// let data =
// 	{ name : 'edim',
// 		treeName: 'Mangoo',
// 		total : 0,
// 		harvest: 0,
// 		age: 0,
// 	}

// export const fetchData = () => ({
// 	return dispatch =>
// 		return dispatch({
// 			type: 'FETCH_DATA',
// 			payload: data
// 		})
// })
let random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
// // let newData = {
// //   name : 'edim',
// //   treeName: 'Mangoo',
// // 	total : this.state.data[0].total + random,
// // 	harvest: 0,
// // 	age: this.state.data[0].age+1,
// // }

export const addGrow = () => ({
	return dispatch({
		type : 'ADD_GROW',
		payload: random
	})
})
