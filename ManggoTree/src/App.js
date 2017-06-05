import { StackNavigator } from 'react-navigation';

import Welcome from './components/Welcome';
import Begin from './components/Begin'

const App = StackNavigator({
  Main: { screen: Welcome },
  Begin: { screen: Begin },
}, {
  headerMode: 'none',
});


export default App;