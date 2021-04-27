import { combineReducers } from 'redux';
// Reducers
import contactList from 'redux/contact-list/reducer';

const rootReducer = combineReducers({
  contactList,
});

export default rootReducer;
