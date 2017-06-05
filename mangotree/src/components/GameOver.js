import React from 'react'

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { clearState } from '../actions'



class GameOver extends React.Component {
  onPressPlayAgain() {
    // need to clear the state in the store
    this.props.clearState()

    //Back to Main page
    Actions.Main()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Gameover</Text>
        <Text>You tree '{this.props.name}' is DEAD at the age of {this.props.age}</Text>
        <Text>You have harvested {this.props.harvested} fruits</Text>

        <TouchableOpacity style={styles.playAgainButton} onPress={() => this.onPressPlayAgain() } >
          <Text>Play Again</Text>
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
  playAgainButton: {
    margin: 0,
    padding: 10,
    backgroundColor: '#30A9DE',
  }

}


const mapStateToProps = (state) => {
  return {
    name: state.MangoReducer.name,
    age: state.MangoReducer.age,
    harvested: state.MangoReducer.harvested
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearState: () => { dispatch(clearState()) },
  }
}



const connectedGameOver = connect(mapStateToProps, mapDispatchToProps)(GameOver)
export default connectedGameOver
