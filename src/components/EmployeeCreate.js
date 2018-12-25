import {createEmployee, updateEmployee} from './../actions';
import {Button, Card, CardSection, Input, Spinner} from './common';
import React, { Component } from 'react';
import {Picker, Text} from 'react-native';
import {connect} from 'react-redux';

class EmployeeCreate extends Component {

  onNameChange(value) {
    this.props.updateEmployee({prop: 'name', value});
  }

  onPhoneChange(value) {
    this.props.updateEmployee({prop: 'phone', value});
  }

  onShiftChange(value) {
    this.props.updateEmployee({prop: 'shift', value});
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
        <CardSection>
          <Input
            label="Name"
            placeholder="John"
            value={this.props.name}
            onChangeText={this.onNameChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="650-526-8926"
            value={this.props.phone}
            onChangeText={this.onPhoneChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            style={{ flex:1}}
            onValueChange={this.onShiftChange.bind(this)}>
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        <CardSection>
          {this.renderCreateButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
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

export default connect(mapStateToProps, {updateEmployee, createEmployee})(EmployeeCreate);
