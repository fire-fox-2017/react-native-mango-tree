import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';


class MainScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      toggleHarvest: true,
      growthStats: 0,
    };
  }

  

  render() {
    return (
      <View>
        <Text>Main Component</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('GameOver')} style={{ backgroundColor: 'green' }}><Text>Emulate</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('GameOver')} style={{ backgroundColor: 'green' }}><Text>Gameover</Text></TouchableOpacity>
      </View>
    );
  }
}

export default MainScreen