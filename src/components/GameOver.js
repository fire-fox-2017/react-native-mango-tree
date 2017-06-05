import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

class GameOver extends React.Component {

  goHome() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View>
        <Text>In Gave Over Screen</Text>
        <TouchableOpacity onPress={() => {this.goHome() }}>
          <Text>Back Home!</Text>
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
    start: () => dispatch(initiate()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
