import LoginReducer from './LoginReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  currentUser: LoginReducer,
});
