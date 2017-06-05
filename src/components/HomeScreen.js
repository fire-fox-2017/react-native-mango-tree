import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { initiate } from '../store/action';
import Simulation from './Simulation';

class HomeScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>In Home Screen</Text>
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
    start: () => dispatch(initiate()),
  };
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const StackNav = StackNavigator({
  HomeScreen: { screen: Home },
  Simulation: { screen: Simulation}
});

export default StackNav;
