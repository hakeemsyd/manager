import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
});
