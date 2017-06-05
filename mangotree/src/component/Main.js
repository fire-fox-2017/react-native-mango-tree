import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Main
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AD1457",
  },
  welcome: {
    fontSize: 40,
    fontWeight:"bold",
    textAlign: "center",
    margin: 10,
    color: "#ffffff"
  }
});
