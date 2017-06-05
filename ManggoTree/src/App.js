import { StackNavigator } from 'react-navigation';

import Welcome from './components/Welcome';

const App = StackNavigator({
  Main: { screen: Welcome },
}, {
  headerMode: 'none',
});


export default App;