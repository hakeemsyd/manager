import {CardSection} from './common';
import React, {Component} from 'react';
import {Text} from 'react-native';

class EmployeeListItem extends Component {
  render() {
    const {name} = this.props.employee;
    return (
      <CardSection>
        <Text style={styles.listItemText}>{name}</Text>
      </CardSection>
    );
  }
}

const styles = {
  listItemText: {
    fontSize: 18,
    paddingLeft: 15,
  }
};

export default EmployeeListItem;
