import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

class GameOver extends React.Component {

  render() {
    return (
      <View>
        <Text>In Gave Over Screen</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
