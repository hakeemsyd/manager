/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {Header} from './components/common';
import LoginForm from './components/LoginForm';
import reducers from './reducers';
import firebase from 'firebase';
import React from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
export default class App extends React.Component {

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDFm158DXRxeROJftfp8Il9oOKjjQ9LjI8',
      authDomain: 'manager-f6f1a.firebaseapp.com',
      databaseURL: 'https://manager-f6f1a.firebaseio.com',
      projectId: 'manager-f6f1a',
      storageBucket: 'manager-f6f1a.appspot.com',
      messagingSenderId: '160467017710'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
        <Provider store={store}>
          <View>
            <Header titleText='Manager'/>
            <LoginForm />
          </View>
        </Provider>
    );
  }
}
