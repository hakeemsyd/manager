import {
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_STARTED,
  DELETE_EMPLOYEE_ERROR,
  DELETE_EMPLOYEE_STARTED,
  EMPLOYEE_CREATE_ERROR,
  EMPLOYEE_CREATED,
  EMPLOYEE_DELETED,
  EMPLOYEE_SAVED,
  RESET_FORM,
  SAVE_EMPLOYEE_ERROR,
  SAVE_EMPLOYEE_STARTED,
  UPDATE_EMPLOYEE
} from './../actions/types';

const INITIAL_STATE = {name: '', phone:'', shift: 'Monday', inProgress: false, error: ''};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UPDATE_EMPLOYEE:
      // action.payload === {prop: 'name', value: 'jane'}
      // following [] is not array rather key interpolation syntax of ES6.
      return {...state, error: '', [action.payload.prop]: action.payload.value};
    case DELETE_EMPLOYEE_STARTED:
    case SAVE_EMPLOYEE_STARTED:
    case CREATE_EMPLOYEE_STARTED:
      return {...state, inProgress: action.payload};
    case RESET_FORM:
    case EMPLOYEE_SAVED:
    case EMPLOYEE_CREATED:
    case EMPLOYEE_DELETED:
      return INITIAL_STATE;
    case SAVE_EMPLOYEE_ERROR:
    case EMPLOYEE_CREATE_ERROR:
    case DELETE_EMPLOYEE_ERROR:
      return {...state, inProgress: false, error: action.payload};
    default:
      return state;
  };
}
