import { Actions } from 'react-native-router-flux'

import {
    GET_USER_NAME,
    GET_TREE_NAME
} from './constant'

export const getUserName = username => {
    return {
        type: GET_USER_NAME,
        payload: username
    }
}

export const getTreeName = treename => {
    return {
        type: GET_TREE_NAME,
        payload: treename
    }
}

export const getTree = (username, treename) => {
    Actions.tree()
}