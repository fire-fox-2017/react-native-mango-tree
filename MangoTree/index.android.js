/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import store from "./src/Store/Store";
import App from "./src/Components/App";
export default class MangoTree extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("MangoTree", () => MangoTree);
