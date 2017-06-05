import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

class Welcome extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : ''
    }
  }

  handleChangeText(data){
    this.setState({ name : data});
    this.props.setName(this.state.name);
  }

  render() {
    const { navigation }= this.props

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Manggo Tree
        </Text>
        <TextInput
        style={{height: 40, width:200 ,borderColor: 'gray' }}
        onChangeText={(text) => this.handleChangeText({ text })}
        value={this.state.name}
        placeholder= 'input your name tree'
        />
        <Button
          onPress={() => { navigation.navigate('Begin'); }}
          title="Start"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
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

const dispatchToState = dispatch => ({
  setName : (data) => dispatch({type: 'SET_TREE', payload: data}),
})

export default connect(null, dispatchToState)(Welcome)