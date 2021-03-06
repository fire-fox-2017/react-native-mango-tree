/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import {
  AppRegistry
} from 'react-native';

import App from './src/App.js'
import store from './src/store'

export default class ManggoTree extends Component{
  render(){
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ManggoTree', () => ManggoTree);
