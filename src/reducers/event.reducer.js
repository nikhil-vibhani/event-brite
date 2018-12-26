import { ADD_EVENT } from './reducer.types';
import lodash from 'lodash';

const Event = (state = {}, action) => {
  	switch (action.type) {
        case 'ADD_EVENT':		  
		  return action.data;
      	default:
          	return state;
	  }
}

export const checkOutEvent = (state = "", action) => {
	switch (action.type) {
	  case 'ADD_CHECKOUT':
		return  action.data.value;
		default:
			return state;
	}
}

export default Event;