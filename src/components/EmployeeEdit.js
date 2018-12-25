import {deleteEmployee, saveEmployee, updateEmployee} from './../actions';
import {Button, Card, CardSection, Spinner} from './common';
import EmployeeForm from './EmployeeForm';
import _ from 'lodash';
import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class EmployeeEdit extends Component {

  componentWillMount() {
    // pre populate the redux store with pre existing employee
    _.each(this.props.employee, (value, prop) => {
      this.props.updateEmployee({prop, value});
    });
  }

  onSave() {
    const {name, phone, shift} = this.props;
    this.props.saveEmployee({name, phone, shift, id: this.props.employee.uid});
  }

  onDelete() {
    this.props.deleteEmployee(this.props.uid);
  }

  renderSaveAndDeleteButtons() {
    return this.props.inProgress ?
    <Spinner size='small' />
    :
      <View>
        <CardSection>
          <Button onPress={this.onSave.bind(this)}>Save</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onDelete.bind(this)}>Delete</Button>
        </CardSection>
      </View>;
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        {this.renderSaveAndDeleteButtons()}
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  return {
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift,
    inProgress: state.employeeForm.inProgress,
    error: state.employeeForm.error,
  }
}

export default connect(mapStateToProps, {updateEmployee, saveEmployee, deleteEmployee})(EmployeeEdit);
