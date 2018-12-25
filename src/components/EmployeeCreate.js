import {createEmployee, resetForm} from './../actions';
import {Button, Card, CardSection, Spinner} from './common';
import EmployeeForm from './EmployeeForm';
import React, { Component } from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.resetForm();
  }

  onCreatePressed() {
    const {name, phone, shift} = this.props;
    this.props.createEmployee({name, phone, shift});
  }

  renderCreateButton() {
    return this.props.inProgress ? <Spinner /> :
      <Button onPress={this.onCreatePressed.bind(this)}>Create</Button>;
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        <CardSection>
          {this.renderCreateButton()}
        </CardSection>
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

export default connect(mapStateToProps, {createEmployee, resetForm})(EmployeeCreate);
