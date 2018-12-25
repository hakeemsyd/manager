import {deleteEmployee, saveEmployee, updateEmployee} from './../actions';
import {Button, Card, CardSection, Confirm, Spinner} from './common';
import EmployeeForm from './EmployeeForm';
import _ from 'lodash';
import React, { Component } from 'react';
import {Text, View} from 'react-native';
import Communications from 'react-native-communications';
import {connect} from 'react-redux';

class EmployeeEdit extends Component {
  state = {showModal: false};

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
    this.setState({showModal: !this.state.showModal});
  }

  onAccept() {
    this.props.deleteEmployee({id: this.props.employee.uid});
  }

  onDecline() {
    this.setState({showModal: false});
  }

  onText() {
    const {phone, shift} = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}` )
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
        <CardSection>
          <Button onPress={this.onText.bind(this)}>Text</Button>
        </CardSection>
      </View>;
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        {this.renderSaveAndDeleteButtons()}
        <Confirm
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
          visible={this.state.showModal}>
          Are you sure you want to delete?
        </Confirm>
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
