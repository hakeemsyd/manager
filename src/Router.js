import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeList from './components/EmployeeList';
import LoginForm from './components/LoginForm';
import React from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';

class RouterComponent extends React.Component {
  render() {
    return (
      <Router sceneStyle={{paddingTop: 64}}>
        <Scene key="root" >
          <Scene key="auth">
            <Scene
              key="login"
              component={LoginForm}
              title="Please Login"
              initial/>
          </Scene>
          <Scene key="main">
            <Scene
              rightTitle="Add"
              onRight={() => Actions.employeeCreate()}
              key="employeeList"
              component={EmployeeList}
              title="Employees"
              initial
              />
            <Scene
              key="employeeCreate"
              component={EmployeeCreate}
              title="Create Employee"/>
            <Scene
              key="employeeEdit"
              component={EmployeeEdit}
              title="Edit Employee"/>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
