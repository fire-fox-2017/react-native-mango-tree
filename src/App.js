import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';

import store from './store/configureStore';

class App extends React.Component {

  render() {
    return (
      <View>
        <Text>Up and Running</Text>
      </View>
    );
  }

}

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWithStore;
