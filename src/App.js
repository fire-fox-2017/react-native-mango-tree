import React from 'react'
import {
    View,
    Text
} from 'react-native'

import {
    Provider
} from 'react-redux'

import store from './store/index'

import Router from './router/Router'

class App extends React.Component {

    render() {
        return (
            <Router />
        )
    }

}

export default App