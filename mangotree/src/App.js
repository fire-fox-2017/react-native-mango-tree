import React, { Component } from 'react'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './components/Welcome';
import MainScreen from './components/Main';
import GameOverScreen from './components/GameOver';

export const App = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: { screen: MainScreen },
  GameOver: { screen: GameOverScreen },
});

export default App;
