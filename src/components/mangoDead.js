import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class MangoDead extends Component {
  constructor(props) {
		super(props)
	}

  render() {
    return (
      <View style={{ paddingTop: 55, paddingLeft: 40, }}>
        <Text style={{ paddingTop: 55, padding: 40, fontWeight: 200 }}>Mango DEAD {this.props.status}</Text>
        <Image source={require('../assets/4.png')} />

      </View>
    );
  }
}
