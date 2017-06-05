import React, { Component } from "react";
import { View, Text, ListView, Button, Image } from "react-native";
import { connect } from "react-redux";
import { StackNavigator } from "react-navigation";

import { grow, harvest } from "../Actions/MangoAction";

class Grow extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    console.log(props.mangos.name);
    this.state = {
      toggleHarvest: true,
      pertumbuhan: 0
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
    if (this.props.mangos.status === "dead") {
      const { navigate } = this.props.navigation;
      navigate("GameOver");
    } else if (
      this.props.mangos.age ===
      Math.floor(this.props.mangos.harvestAge * (1 / 3))
    ) {
      this.setState({
        pertumbuhan: 1
      });
    } else if (
      this.props.mangos.age ===
      Math.floor(this.props.mangos.harvestAge * (2 / 3))
    ) {
      this.setState({
        pertumbuhan: 2
      });
    } else if (this.props.mangos.age === this.props.mangos.harvestAge) {
      this.setState({
        pertumbuhan: 3
      });
    }
  };

  harvestTree = () => {
    this.props.harvest();
    this.checkFruit(this.props.mangos.Fruit);
  };

  render() {
    let test = require(`../../assets/0.png`);
    if (this.state.pertumbuhan === 1) {
      test = require(`../../assets/1.png`);
    } else if (this.state.pertumbuhan === 2) {
      test = require(`../../assets/2.png`);
    } else if (this.state.pertumbuhan === 3) {
      test = require(`../../assets/3.png`);
    }
    return (
      <View>
        <Text>This is {this.props.mangos.plantName},</Text>
        <Text>He is now {this.props.mangos.age} years old</Text>
        <Text>basket:{this.props.mangos.harvest}</Text>
        <Image source={test} />
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
