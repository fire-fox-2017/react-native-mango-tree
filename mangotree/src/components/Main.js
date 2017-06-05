import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  onPressHandler() {
    console.log("onPressHandler")
    // call action set name
    // then go to other page
  }

  render () {
    return (
      <View>
        <Text>Main</Text>

        <TextInput
          style={{height: 40}}
          placeholder="Type here!"
          onChangeText={(name) => this.setState({name})}
        />

        <Button title="Start" onPress={() => this.onPressHandler() } />

      </View>
    )
  }
}



export default Main
