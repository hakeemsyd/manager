import {getEmployees} from './../actions/EmployeeActions';
import EmployeeListItem from './EmployeeListItem';
import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.getEmployees();
  }

  renderItem(listItem) {
    return (<EmployeeListItem employee={listItem.item} />);
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={(employee) => employee.uid}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees.data, (val, uid) => {
    return {...val, uid}; // {shift: 'Monday', name: 'John', phone:'64545', id: 'xxxx'}
  });
  return {
    employees: employees,
  };
}


export default connect(mapStateToProps, {getEmployees})(EmployeeList);
