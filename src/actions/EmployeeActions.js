import {
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_STARTED,
  EMPLOYEE_CREATE_ERROR,
  EMPLOYEE_CREATED,
  UPDATE_EMPLOYEE,
} from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const updateEmployee = ({prop, value}) => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: {prop, value},
  };
}

export const createEmployee = ({name, phone, shift}) => {
  return (dispatch) => {
    dispatch({type: CREATE_EMPLOYEE_STARTED, payload: true});
    const {currentUser} = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_CREATED});
        Actions.employeeList();
      }).catch(error => {
        dispatch({type: EMPLOYEE_CREATE_ERROR, payload: error});
        console.log(error);
      });
  };
}
