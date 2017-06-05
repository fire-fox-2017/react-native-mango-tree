import React from 'react'
import { StackNavigator } from 'react-navigation';

import Welcome from './components/Welcome'
import Main from './components/Main'
import GameOver from './components/GameOver'

const App = StackNavigator({
  Welcome: { screen: Welcome },
  Main: { screen: Main },
  Over: { screen: GameOver },
})