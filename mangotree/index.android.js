import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import App from "./src/component/App";
import store from "./src/data/store";

const Index=()=>{
  return(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent("mangotree", () => Index);
