import { StackNavigator } from "react-navigation";

import Welcome from "./Welcome";
import Main from "./Main";

const App = StackNavigator({
  Home: {
    screen: Welcome,
  },
  Main: {
    screen: Main,
  },
});

export default App;
