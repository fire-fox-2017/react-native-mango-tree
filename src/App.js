import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from './store/configureStore';
import Home from './components/HomeScreen';
import Simulation from './components/Simulation';
import GameOver from './components/GameOver';

class App extends React.Component {

  render() {
    return (
      <View>
        <Home />
      </View>
    );
  }
}

const AppNav = StackNavigator({
  Home: { screen: Home },
  Simulation: { screen: Simulation },
  GameOver: { screen: GameOver },
}, { headerMode: 'none' });


const AppWithStore = () => {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}

export default AppWithStore;
