import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { addAge, bearFruit, harvestFruit, isHealty } from '../store/action';
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
    this.
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>In Simulation Scene</Text>
        <TouchableOpacity onPress={() => {this.goHome() }}>
          <Text>Simulate!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.goHome() }}>
          <Text>Harvest!</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    treeName: state.treeName,
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
    isHealthy: (age) => dispatch(isHealthy()),
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
