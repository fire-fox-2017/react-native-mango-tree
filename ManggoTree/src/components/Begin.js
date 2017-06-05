import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';

class Welcome extends Component {

  handleChangeText(data){
  }

  handleButton(){
  }

  render() {
    console.log(this.props.getName, 'diBegin')
    const { navigation, getName } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is {getName.name} Tree
        </Text>
        <Button
          onPress={() => { this.handleButton(); navigation.navigate('Begin'); }}
          title="Emulate"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#18a3d6',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const stateToProps = state => ({
  getName: state.statusharverst
})


export default connect(stateToProps, null)(Welcome)