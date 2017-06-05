import React, { Component } from "react";
import { View, Text, ListView, Button } from "react-native";
import { connect } from "react-redux";
import { StackNavigator } from "react-navigation";

import { grow, harvest } from "../Actions/MangoAction";

class Grow extends Component {
  constructor(props) {
    super(props);
    console.log(props.mangos.name);
    this.state = {};
  }

  growTree = () => {
    this.props.grow();
  };

  harvestTree = () => {
    this.props.harvest();
  };

  render() {
    return (
      <View>
        <Text>This is name,</Text>
        <Text>He is now age years old</Text>

        <Button
          onPress={() => this.growTree()}
          title="Emulate"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.harvestTree()}
          title="Harvest"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    mangos: state.mangos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    harvest: () => {
      dispatch(harvest());
    },
    grow: () => {
      dispatch(grow());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Grow);
