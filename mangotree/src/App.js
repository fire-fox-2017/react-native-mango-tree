import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { Router, Scene } from 'react-native-router-flux';


import Main from './components/Main'
import Emulate from './components/Emulate'
import GameOver from './components/GameOver'


class App extends React.Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Text>App</Text>

        <Router>
           <Scene key="Main" component={Main} title="Mango Tree" initial={true}  />
           <Scene key="Emulate" component={Emulate} title="Emulate" />
           <Scene key="Gameover" component={GameOver} title="Game Over" />
        </Router>

      </View>

    )
  }
}

export default App
