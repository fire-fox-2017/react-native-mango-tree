import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Signin from './components/signin';
import Mango from './components/mango';
import MangoDead from './components/mangoDead';

const App = () => {
  return (
    <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}>
      <Scene key="root">
        <Scene key="pageSignIn" component={Signin} title="Sign In" initial={true} />
        <Scene key="pageMango" component={Mango} title="Mango Tree" />
        <Scene key="pageMangoDead" component={MangoDead} title="Mango Dead" />
      </Scene>
    </Router>
  );
};

const styles = {
  navBar: {
    backgroundColor: '#A5F2E7',
  },
  navBarTitle: {
    color: '#3A0077',
  },
  barButtonTextStyle:{
    color: '#8983F3'
  },
  barButtonIconStyle:{
    tintColor: '#8983F3'
  }
}

export default App
