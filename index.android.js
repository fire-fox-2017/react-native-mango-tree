import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import App from './src/App'
import { Provider } from 'react-redux'
import store from './src/store'

export default class awesome extends Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <App />
      </View>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
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

AppRegistry.registerComponent('awesome', () => awesome);
