import {
  EMAIL_CHANGED,
  LOGIN_STARTED,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGED,
  SIGNUP_USER_SUCCESS
} from './../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: '',
    user: null
  };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
     return {...state, email: action.payload, error: ''};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload, error: ''};
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.payload, loading: false, error: ''};
    case LOGIN_USER_FAILED:
      console.log('action!!');
      return {...state, user: null, loading: false, error: action.payload};
    case SIGNUP_USER_SUCCESS:
      return {...state, loading: false, user: action.payload, error: ''};
    case LOGIN_STARTED:
      return {...state, loading: action.payload};
    default:
      return state;
  }
}
