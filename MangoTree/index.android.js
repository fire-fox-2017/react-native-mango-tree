/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import { AppRegistry } from "react-native";

import { Provider } from "react-redux";

import store from "./src/Store/Store";
import App from "./src/Components/App";

const MangoTree = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("AwesomeProject", () => MangoTree);
