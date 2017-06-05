import React, { Component } from "react";
import { View, Text, ListView, Button, Image } from "react-native";
import { connect } from "react-redux";
import { StackNavigator } from "react-navigation";

class GameOver extends Component {
  constructor(props) {
    super(props);
  }

  //   static navigationOptions = {
  //     title: "List Anime"
  //   };

  render() {
    return (
      <View>
        <Text>you just found {this.props.mangos.plantName}</Text>
        <Text>and he's dead</Text>
        <Text>He's old anyway...</Text>
        <Image source={require(`../../assets/4.png`)} />
        <Text>Game Over</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    mangos: state.mangos
  };
};

export default connect(mapStateToProps, null)(GameOver);
