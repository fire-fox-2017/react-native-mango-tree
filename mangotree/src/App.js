import React from 'react'
import {
  View,
  Text
} from 'react-native'

import Main from './components/Main'

class App extends React.Component {
  render () {
    return (
      <View>
        <Text>App</Text>
        <Main />
      </View>
    )
  }
}

export default App
