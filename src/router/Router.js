import React from 'react'
import {
    Scene,
    Router
} from 'react-native-router-flux'

import Home from '../components/Home'
import Tree from '../components/Tree'
import Dead from '../components/Dead'

const RouterComponent = () => {
    return (
        <Router style={styles.routerStyle}>
            <Scene key="home" component={Home} title="Welcome" />
            <Scene key="tree" component={Tree} title="Your Mango Tree" />
            <Scene key="dead" component={Dead} title="Your Mango Is Dead" />
        </Router>
    )
}

const styles = {
    routerStyle: {
        paddingTop: 100
    }
}

export default RouterComponent