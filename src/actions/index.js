import {
  EMAIL_CHANGED,
  LOGIN_STARTED,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGED,
  SIGNUP_USER_SUCCESS
} from './types';
import firebase from 'firebase';

export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGED,
    payload: email,
  };
};

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password,
  };
}

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({type: LOGIN_STARTED, payload: true})
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({type: LOGIN_USER_SUCCESS, payload: user});
      })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => {
              dispatch({type: SIGNUP_USER_SUCCESS, payload: user});
          })
          .catch(exception => {
              dispatch({type: LOGIN_USER_FAILED, payload: 'Authentication failure'});
          });
      });
  };
}
