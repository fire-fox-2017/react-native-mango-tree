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
    this.props.startGrow();
  }

  render() {
    console.log(this.props.getName, 'diBegin')
    const { navigation, getName } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.getSecond}>
          <Text >
            Harvest
          </Text>
        </View>
        <View style={styles.getSecond}>
          <Text style={styles.welcome}>
            This is {getName.name} Tree
          </Text>
          <Text style={styles.welcome}>
            The Tree {getName.grow} Year's old
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Button
              style={{paddingRight: 10}}
              onPress={() => { this.handleButton()}}
              title="Start"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            { getName.grow >= getName.harvest ?
              <Button
                onPress={() => { this.handleButton()}}
                title="Harvest"
                color="#158548"
                accessibilityLabel="Learn more about this purple button"
              /> : <View></View>}
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#18a3d6',
  },
  getFirst: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  getSecond: {
    justifyContent: 'center',
    alignItems: 'center',
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

const dispatchToState = dispatch => ({
  startGrow: () => dispatch({ type: 'ADD_AGE' })
})


export default connect(stateToProps, dispatchToState)(Welcome)