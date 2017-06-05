import React from 'react'
import {
    Scene,
    Router
} from 'react-native-router-flux'

import Home from '../components/Home'

const RouterComponent = () => {
    return (
        <Router style={styles.routerStyle}>
            <Scene key="home" component={Home} title="Welcome" />
        </Router>
    )
}

const styles = {
    routerStyle: {
        paddingTop: 100
    }
}

export default RouterComponent