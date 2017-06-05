import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      treeName: '',
    };
  }

  render() {
    return (
      <View>
        <Text>Welcome!</Text>
        <TextInput
          placeholder="your name"
          onChangeText={name => this.setState({ name })}
          value={this.state.text}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        <TextInput
          placeholder="give your tree a name"
          onChangeText={treeName => this.setState({ treeName })}
          value={this.state.treeName}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')} style={{ backgroundColor: "green" }}><Text>Submit</Text></TouchableOpacity>
      </View>
    );
  }
}

export default WelcomeScreen;
