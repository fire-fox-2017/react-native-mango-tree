import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { addAge, bearFruit, harvestFruit, isHealthy } from '../store/action';
import GameOver from './GameOver';

class Simulation extends React.Component {

  static navigationOptions = {
      title: 'Welcome',
      header: {
        visible: false
      }
    };

  goHome() {
    this.props.navigation.navigate('GameOver');
  }

  simulate() {
    this.props.addAge();
    this.props.isHealthyCheck(this.props.age);
    this.props.bearFruit(this.props.age);
  }

  harvest() {
    this.props.harvestFruit();
  }

  render() {
    console.log(this.props);
    if (this.props.age >= this.props.maxAge) {
      return (
        <View>
          <Text>In Simulation Scene</Text>
          <Text>age: {this.props.age}</Text>
          <Text>total harvest: {this.props.totalHarvest}</Text>
          <Text>current harvest: {this.props.currentHarvest}</Text>
          <TouchableOpacity onPress={() => {this.simulate() }}>
            <Text>Simulate!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.harvest() }}>
            <Text>Harvest!</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View>
          <GameOver />
        </View>
      );
    }

  }

}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    treeName: state.treeName,
    age: state.age,
    maxAge: state.maxAge,
    bearingAge: state.bearingAge,
    currentHarvest: state.currentHarvest,
    totalHarvest: state.totalHarvest,
    isHealthy: state.isHealthy,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAge: (age) => dispatch(addAge(age)),
    bearFruit: (age) => dispatch(bearFruit(age)),
    harvestFruit: () => dispatch(harvestFruit()),
    isHealthyCheck: (age) => dispatch(isHealthy(age)),
  };
}

const SimScreen = connect(mapStateToProps, mapDispatchToProps)(Simulation);

const SimNav = TabNavigator({
  Simulation: {screen: SimScreen},
  GameOver: {screen: GameOver},
},
  { tabBarVisible: false },
);

export default SimScreen;
