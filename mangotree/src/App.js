import React, { Component } from 'react'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './components/Welcome';
import MainScreen from './components/Main';

export const App = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: { screen: MainScreen },
});

export default App;
