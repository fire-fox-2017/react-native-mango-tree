import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View, Button } from 'react-native';

export default class Mango extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : 'edim',
      treeName: 'Mangoo',
      total : 0,
      harvest: 0,
      age: 0,

    }
  }


  onPress() {
    let random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    let newState = {

    }
  }

  render() {
    return (
      <View>
        <Text>This is {this.state.treeName}</Text>
        <Text>heb is {this.state.treeName} years old</Text>

          <Button
            onPress={onPress}
            title="Emulate"
            color="#841584"
          />
      </View>
    );
  }
}
