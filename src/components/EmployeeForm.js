import {updateEmployee} from './../actions';
import {CardSection, Input} from './common';
import React, {Component} from 'react';
import {Picker, Text, View} from 'react-native';
import {connect} from 'react-redux';

class EmployeeForm extends Component {

  onNameChange(value) {
    this.props.updateEmployee({prop: 'name', value});
  }

  onPhoneChange(value) {
    this.props.updateEmployee({prop: 'phone', value});
  }

  onShiftChange(value) {
    this.props.updateEmployee({prop: 'shift', value});
  }

  render() {
    return (
        <View>
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
        </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
}

export default connect(null, {updateEmployee})(EmployeeForm);
