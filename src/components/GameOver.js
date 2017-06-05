import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

const styles = {
  image: {
    width: 250,
    height: 250,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 5,
    margin: 10
  },
};


class GameOver extends React.Component {

  goHome() {
    this.props.navigation.navigate('Home');
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Game Over!</Text>
        <Image source={this.props.image} style={styles.image}/>
        <TouchableOpacity style={styles.button} onPress={() => {this.goHome() }}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    );
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
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
