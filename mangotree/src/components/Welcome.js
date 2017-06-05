import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Welcome!</Text>
        <TextInput placeholder="your name" style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} />
        <TextInput placeholder="give your tree a name" style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} />
        <TouchableOpacity style={{ backgroundColor: "violet" }}><Text>Submit</Text></TouchableOpacity>
      </View>
    );
  }
}

export default WelcomeScreen;
