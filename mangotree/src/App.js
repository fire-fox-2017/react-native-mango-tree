import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { Router, Scene } from 'react-native-router-flux';


import Main from './components/Main'
import Emulate from './components/Emulate'
class App extends React.Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Text>App</Text>

        <Router>
           <Scene key="Main" component={Main} title="Main" initial={true}  />
           <Scene key="Emulate" component={Emulate} title="Emulate" />
        </Router>

      </View>

    )
  }
}

export default App
