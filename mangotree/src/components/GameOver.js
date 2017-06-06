import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class GameOverScreen extends Component {
  render() {
    return (
      <View>
        <Text>Game Over!</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('GameOver')} style={{ backgroundColor: "green" }}><Text>Submit</Text></TouchableOpacity>
      </View>
    );
  }
}

export default GameOverScreen;
