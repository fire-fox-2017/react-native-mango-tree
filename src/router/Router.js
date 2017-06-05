import React from 'react'
import {
    Scene,
    Router
} from 'react-native-router-flux'

import Home from '../components/Home'

const RouterComponent = () => {
    return (
        <Router style={styles.paddingTop}>
            <Scene key="home" component={Home} title="Welcome"></Scene>
        </Router>
    )
}

const styles = {
    routerStyle: {
        paddingTop: 65
    }
}

export default RouterComponent