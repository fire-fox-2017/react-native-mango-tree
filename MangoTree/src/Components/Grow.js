import React, { Component } from "react";
import { View, Text, ListView, Button } from "react-native";
import { connect } from "react-redux";
import { StackNavigator } from "react-navigation";

import { grow, harvest } from "../Actions/MangoAction";

class Grow extends Component {
  constructor(props) {
    super(props);
    console.log(props.mangos.name);
    this.state = {
      toggleHarvest: true
    };
  }

  checkFruit(Fruit) {
    if (Fruit !== 0) {
      this.setState({
        toggleHarvest: false
      });
    } else {
      this.setState({
        toggleHarvest: true
      });
    }
  }

  growTree = () => {
    this.props.grow();
    this.checkFruit(this.props.mangos.Fruit);
  };

  harvestTree = () => {
    this.props.harvest();
    this.checkFruit(this.props.mangos.Fruit);
  };

  render() {
    return (
      <View>
        <Text>This is name,</Text>
        <Text>He is now age years old</Text>
        <Text>basket:{this.props.mangos.harvest}</Text>

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
          disabled={this.state.toggleHarvest}
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
