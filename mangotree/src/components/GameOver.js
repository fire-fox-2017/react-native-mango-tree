import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';


class GameOver extends Component {
  render() {
    return (
      <View>
        <Text>Game Over</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  tree: state
})

export default connect(mapStateToProps, null)(GameOver)