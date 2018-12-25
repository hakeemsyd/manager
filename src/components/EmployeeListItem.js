import {CardSection} from './common';
import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

class EmployeeListItem extends Component {

  onRowPress() {
    Actions.employeeEdit({employee: this.props.employee});
  }

  render() {
    const {name} = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.listItemText}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
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
