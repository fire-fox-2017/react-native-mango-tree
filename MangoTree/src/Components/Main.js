import React, { Component } from "react";
import { View, Text, ListView, Button } from "react-native";
import { connect } from "react-redux";
import { StackNavigator } from "react-navigation";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  //   static navigationOptions = {
  //     title: "List Anime"
  //   };

  state = {};

  componentDidMount() {
    this.props.initAnime();
  }

  render() {
    return (
      <View>
        <h1>WOE</h1>
      </View>
    );
  }
}

export default connect(null, null)(Main);
