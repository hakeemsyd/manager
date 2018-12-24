import {EMAIL_CHANGED, LOGIN, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from './types';
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
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({type: LOGIN_USER_SUCCESS, payload: user});
      });
  };
}
