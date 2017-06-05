import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from "react-native";

export default class Welcome extends Component {
  static navigationOptions = {
    header:null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome
        </Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={''}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4DB6AC",
  },
  welcome: {
    fontSize: 40,
    fontWeight:"bold",
    textAlign: "center",
    color: "#ffffff"
  }
});
