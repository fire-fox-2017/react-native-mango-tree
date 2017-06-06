import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from "react-navigation";


import { getNamesSuccess } from '../actions';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      treeName: '',
    };
  }

startGame = () => {
  const { navigate } = this.props.navigation;
  console.log(this.props.getNamesSuccess);
  this.props.getNamesSuccess(this.state.name, this.state.treeName);
  navigate('Main');
};

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
        <Button title="Start Game" onPress={() => this.startGame()} style={{ backgroundColor: "green" }} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNamesSuccess: (name, treeName) => { 
      dispatch(getNamesSuccess(name, treeName)) 
    }
  }
}

export default connect(null, mapDispatchToProps)(WelcomeScreen);
