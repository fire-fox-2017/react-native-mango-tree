import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { initiate } from '../store/action';
import Simulation from './Simulation';

class HomeScreen extends React.Component {

  static navigationOptions = {
      title: 'Welcome',
    };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      treeName: '',
      message: '',
    }
  }

  start() {
    if(this.state.username.length > 0 && this.state.treeName.length > 0) {
      this.setState({
        message: '',
      });
      this.props.start(this.state.username, this.state.treeName);
      this.props.navigation.navigate('Simulation');
    } else {
      this.setState({
        message: 'Username and Tree Name are required',
      });
    }

  }

  render() {
    // console.log(this.props);
    return (
      <View>
        <Text>Welcome!</Text>
        <View>
          <View>
            <Text>User Name</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
            />
          </View>
          <View>
            <Text>Tree Name</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(treeName) => this.setState({treeName})}
              value={this.state.treeName}
            />
          </View>
          <TouchableOpacity>
            <Text onPress={() => this.start() }>Start</Text>
          </TouchableOpacity>
          <Text>{this.state.message}</Text>
        </View>
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
    start: (username, treeName) => dispatch(initiate(username, treeName)),
  };
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const HomeNav = StackNavigator({
  HomeScreen: {
    screen: Home,
  },
  Simulation: {
    screen: Simulation,
  },
});

export default Home;
