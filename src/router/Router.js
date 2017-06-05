import React from 'react'
import {
    Scene,
    Router
} from 'react-native-router-flux'

import Home from '../components/Home'
import Tree from '../components/Tree'

const RouterComponent = () => {
    return (
        <Router style={styles.routerStyle}>
            <Scene key="home" component={Home} title="Welcome" />
            <Scene key="tree" component={Tree} title="Your Mango Tree" />
        </Router>
    )
}

const styles = {
    routerStyle: {
        paddingTop: 100
    }
}

export default RouterComponent