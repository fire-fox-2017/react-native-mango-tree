import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class MangoDead extends Component {
  constructor(props) {
		super(props)
	}
  
  render() {
    return (
      <View style={{ paddingTop: 55 }}>
        <Text>Mango DEAD {this.props.status}</Text>
      </View>
    );
  }
}
