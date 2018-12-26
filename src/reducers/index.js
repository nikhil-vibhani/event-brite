import { combineReducers } from 'redux'
import Event, {checkOutEvent} from './event.reducer';

export default combineReducers({
	Event,
	checkOutEvent
})