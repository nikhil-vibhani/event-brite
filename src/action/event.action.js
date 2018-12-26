import axios from 'axios';
import { ADD_EVENT, ADD_CHECKOUT } from '../reducers/reducer.types';


// export const setCurrentUser = user => ({
//   	type : AUTHENTICATION_TYPE,
// 	user
// });

export const getEventData = () => {	
	return dispatch => {
		return axios.get("http://947a3a09.ngrok.io/event-details?slug=first").then((res) => {
			dispatch({
				type : ADD_EVENT,
				data: res.data
			})
		});
	}
}

export const addCheckOut = (data) => {
	return dispatch => {
		dispatch({
			type : ADD_CHECKOUT,
			data: data
		})
	}
}

