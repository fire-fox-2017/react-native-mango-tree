import { Actions } from 'react-native-router-flux'

import {
    GET_USER_NAME,
    GET_TREE_NAME,
    GET_TREE_START,
    GET_INFO_TREE
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

export const getTreeStart = tree => {
    Actions.tree()
    return {
        type: GET_TREE_START,
        payload: tree
    }
}

export const getInfoTree = () => {
    return {
        type: GET_INFO_TREE
    }
}