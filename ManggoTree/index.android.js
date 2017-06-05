/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {
  AppRegistry
} from 'react-native';

import App from './src/App.js'

export default class ManggoTree extends Component{
  render(){
    return(
        <App />
    )
  }
}

AppRegistry.registerComponent('ManggoTree', () => ManggoTree);
