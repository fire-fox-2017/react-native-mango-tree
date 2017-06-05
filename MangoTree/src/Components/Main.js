import React, { Component } from "react";
import { View, Text, ListView, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { StackNavigator } from "react-navigation";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "placeholder abal-abal"
    };
  }

  //   static navigationOptions = {
  //     title: "List Anime"
  //   };

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ treeName })}
          value={this.state.text}
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ treeName })}
          value={this.state.text}
        />
      </View>
    );
  }
}

export default Main;
