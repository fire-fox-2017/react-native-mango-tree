import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { initiate } from '../store/action';
import Simulation from './Simulation';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 50,
    fontWeight: 'bold',
    margin: 10
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'green',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    // borderWidth: 1,
    backgroundColor: 'skyblue'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 5,
    margin: 10
  }
}


class HomeScreen extends React.Component {

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
      <View style={styles.container}>
        <View>
            <Text style={styles.welcome}>Welcome!</Text>
        </View>
        <View>
          <View>
            <Text>User Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
            />
          </View>
          <View>
            <Text>Tree Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={(treeName) => this.setState({treeName})}
              value={this.state.treeName}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text onPress={() => this.start() }>Start</Text>
            </TouchableOpacity>
            <Text>{this.state.message}</Text>
          </View>
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

export default Home;
