import {
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_STARTED,
  EMPLOYEE_CREATE_ERROR,
  EMPLOYEE_CREATED,
  EMPLOYEE_SAVED,
  GET_EMPLOYEES_COMPLETED,
  GET_EMPLOYEES_INPROGRESS,
  SAVE_EMPLOYEE_ERROR,
  SAVE_EMPLOYEE_STARTED,
  UPDATE_EMPLOYEE
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

    if (name === "" || phone === "") {
      dispatch({type: EMPLOYEE_CREATE_ERROR, payload: 'Provide phone and name'});
      return;
    }
    const {currentUser} = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_CREATED});
        // following line can also be replaced with Actions.pop();
        Actions.employeeList({type: 'reset'});
      }).catch(error => {
        dispatch({type: EMPLOYEE_CREATE_ERROR, payload: error});
        console.log(error);
      });
  };
}

export const getEmployees = () => {
  return (dispatch) => {
    dispatch({type: GET_EMPLOYEES_INPROGRESS, payload: true});
    const {currentUser} = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        console.log(snapshot);
        dispatch({type: GET_EMPLOYEES_COMPLETED, payload: snapshot.val()});
      });
  };
}

export const saveEmployee = ({name, phone, shift, id}) => {
  console.log(id);
  return (dispatch) => {
    dispatch({type: SAVE_EMPLOYEE_STARTED, payload: true});
    const {currentUser} = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees/${id}`)
      .set({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_SAVED});
        // following line can also be replaced with Actions.pop();
        Actions.employeeList({type: 'reset'});
      }).catch(error => {
        dispatch({type: SAVE_EMPLOYEE_ERROR, payload: error});
        console.log(error);
      });
  };
}

export const deleteEmployee = (uid) => {
  return (dispatch) => {

  };
}
