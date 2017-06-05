import React from 'react'

import {
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

class GameOver extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Gameover</Text>
        <Text>You tree '{this.props.name}' is DEAD at the age of {this.props.age}</Text>
        <Text>You have harvested {this.props.harvested} fruits</Text>

      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 50
  }
}


const mapStateToProps = (state) => {
  return {
    name: state.MangoReducer.name,
    age: state.MangoReducer.age,
    harvested: state.MangoReducer.harvested
  }
}


const connectedGameOver = connect(mapStateToProps, null)(GameOver)
export default connectedGameOver
