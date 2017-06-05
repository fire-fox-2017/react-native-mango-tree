import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { gameStart } from '../actions'

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
    this.props.gameStart(this.state)
    Actions.Emulate({temp: this.state})

  }

  render () {
    return (
      <View style={styles.container}>

        <TextInput
          style={{height: 40}}
          placeholder="Input Tree Name"
          onChangeText={(name) => this.setState({name})}
        />

        <TouchableOpacity style={styles.startButton} onPress={() => this.onPressHandler() } >
          <Text>Start</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 50
  },
  startButton: {
    margin: 0,
    padding: 10,
    backgroundColor: '#E53A40',
  },

}

const mapDispatchToProps = (dispatch) => {
  return {
    gameStart: (data) => { dispatch(gameStart(data)) }
  }
}

const connectedMain = connect(null, mapDispatchToProps)(Main)
export default connectedMain
