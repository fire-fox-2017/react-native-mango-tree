import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { addAge, bearFruit, harvestFruit, isHealthy } from '../store/action';
import GameOver from './GameOver';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 250,
  },
  inputContainer: {
    flex: 1,
  },
  label: {
    color: 'green'
  },
  input: {
    width: 200,
    height: 40,
    // borderWidth: 1,
    backgroundColor: 'lime'
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
    console.log(this.props.image);
    if (this.props.age < this.props.maxAge) {
      return (
        <View style={styles.container}>
          <Text>In Simulation Scene</Text>
          <Image source={this.props.image} style={styles.image}/>
          <Text>age: {this.props.age}</Text>
          <Text>total harvest: {this.props.totalHarvest}</Text>
          <Text>current harvest: {this.props.currentHarvest}</Text>
          <TouchableOpacity style={styles.button} onPress={() => {this.simulate() }}>
            <Text>Simulate!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {this.harvest() }}>
            <Text>Harvest!</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <GameOver navigation={this.props.navigation} />
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
    image: state.selectedImage,
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
