import React, { Component } from "react";
import { View, Text, ListView, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { StackNavigator } from "react-navigation";

import { addName } from "../Actions/MangoAction";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yourName: "",
      treeName: ""
    };
  }

  StartGrowth = () => {
    const { navigate } = this.props.navigation;
    this.props.addName(this.state.yourName, this.state.treeName);
    navigate("Grow");
  };

  render() {
    return (
      <View>
        <Text>WELCOM</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={yourName => this.setState({ yourName })}
          value={this.state.yourName}
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={treeName => this.setState({ treeName })}
          value={this.state.treeName}
        />
        <Button
          onPress={() => this.StartGrowth()}
          title="Detail Anime"
          title="Start"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addName: (yourname, treename) => {
      dispatch(addName(yourname, treename));
    }
  };
};

export default connect(null, mapDispatchToProps)(Main);
