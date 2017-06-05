import { Actions } from 'react-native-router-flux'

import {
    GET_USER_NAME,
    GET_TREE_NAME,
    GET_TREE_START,
    GET_INFO_TREE,
    ADD_AGE,
    HARVEST_MANGO
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

export const addAge = (age) => {
    return {
        type: ADD_AGE,
        payload: age
    }
}

export const harvestMango = () => {
    return {
        type: HARVEST_MANGO
    }
}