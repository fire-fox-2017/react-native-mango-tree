import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View } from 'react-native';

export default class Mango extends Component {
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
