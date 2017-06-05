import React, { Component } from 'react'
import { View } from 'react-native'
import { TabNavigator } from 'react-navigation';

import WelcomeScreen from './components/Welcome';

export const App = TabNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
});

export default App;
