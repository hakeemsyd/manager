/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {Header} from './components/common';
import reducers from './reducers';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(reducers)}>
          <View style={{flex: 1}}>
            <Header headerText='Tech Stack' />
          </View>
        </Provider>
    );
  }
}
