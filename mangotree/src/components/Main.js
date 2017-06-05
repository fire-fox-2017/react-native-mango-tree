import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

class MainScreen extends Component {
  render() {
    return (
      <View>
        <Text>Main Component</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('GameOver')} style={{ backgroundColor: "green" }}><Text>Submit</Text></TouchableOpacity>
      </View>
    );
  }
}

export default MainScreen