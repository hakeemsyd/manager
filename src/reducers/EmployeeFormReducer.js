import {
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_STARTED,
  EMPLOYEE_CREATE_ERROR,
  EMPLOYEE_CREATED,
  EMPLOYEE_SAVED,
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
    case SAVE_EMPLOYEE_STARTED:
    case CREATE_EMPLOYEE_STARTED:
      return {...state, inProgress: action.payload};
    case EMPLOYEE_SAVED:
    case EMPLOYEE_CREATED:
      return {...state, name: '', phone: '', shift:'Monday', inProgress: false, error: ''};
    case SAVE_EMPLOYEE_ERROR:
    case EMPLOYEE_CREATE_ERROR:
      return {...state, inProgress: false, error: action.payload};
    default:
      return state;
  };
}
