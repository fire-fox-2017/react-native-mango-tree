import { StackNavigator } from "react-navigation";

import { Main } from "./Main";

const App = StackNavigator({
  main: { screen: Main }
  //   Grow: { screen: Grow },
  //   GameOver: { screen: GameOver }
});

export default App;
