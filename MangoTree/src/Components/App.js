import { StackNavigator } from "react-navigation";

import Main from "./Main";
import Grow from "./Grow";
import GameOver from "./GameOver";

const App = StackNavigator({
  Main: { screen: Main },
  Grow: { screen: Grow },
  GameOver: { screen: GameOver }
});

export default App;
