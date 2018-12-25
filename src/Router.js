import EmployeeList from './components/EmployeeList';
import LoginForm from './components/LoginForm';
import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

class RouterComponent extends React.Component {
  render() {
    return (
      <Router sceneStyle={{paddingTop: 64}}>
        <Scene key="root" >
          <Scene key="login" component={LoginForm} title="Please Login" initial/>
          <Scene key="employeeList" component={EmployeeList} title="Employees"/>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
