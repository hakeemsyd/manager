import {emailChanged, loginUser, passwordChanged} from './../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';
import React, { Component } from 'react';
import { Text } from 'react-native';
import {connect} from 'react-redux';

class LoginForm extends Component {

  onEmailChange(email) {
    // call action creator to update app state
    this.props.emailChanged(email);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  onLogin() {
    this.props.loginUser(this.props.email, this.props.password);
  }

  renderButton() {
    return this.props.loading == true ?
      <Spinner size='large' /> : <Button onPress={this.onLogin.bind(this)}> Login </Button>;
  }

  render() {
    // const { email, password, error } = this.state;
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@gmail.com'
            value = {this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            label='Password'
            placeholder='password'
            value = {this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errorTextStyle}></Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
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
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    user: state.auth.user,
    loading: state.auth.loading,
  }
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
