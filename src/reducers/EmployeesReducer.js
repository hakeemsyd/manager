import {
  GET_EMPLOYEES_COMPLETED,
  GET_EMPLOYEES_INPROGRESS,
} from './../actions/types';

const INITIAL_STATE = {data: {}, inProgress: false};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch(action.type) {
    case GET_EMPLOYEES_COMPLETED:
      return {...state, data: action.payload, inProgress: false};
    case GET_EMPLOYEES_INPROGRESS:
      return {...state, inProgress: true};
    default:
      return state;
  }
};
