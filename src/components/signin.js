import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text } from 'react-native';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text>hekllo</Text>
      </View>
    );
  }
}
