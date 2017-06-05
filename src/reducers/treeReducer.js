import {
    GET_USER_NAME,
    GET_TREE_NAME,
    GET_TREE_START,
    GET_INFO_TREE
} from '../actions/constant.js'

const initialState = {
    username: '',
    treename: '',
    age: 0,
    ageHarvest: Math.floor((Math.random() * 10) + 1),
    ageDead: ageHarvest + 1,
    harvest: Math.floor((Math.random() * 10) + 1)
}

const getUserName = (state, data) => {
    let newState = {
        ...state,
        username: data
    }

    return newState
}

const getTreeName = (state, data) => {
    let newState = {
        ...state,
        treename: data
    }

    return newState
}
const getTreeStart = (state, data) => {
    let newState = {
        ...state, ...data
    }

    return newState
}

const getInfoTree = (state) => {
    let newState = {
        ...state
    }

    return newState
}

const treeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER_NAME:
            return getUserName(state, payload)
        case GET_TREE_NAME:
            return getTreeName(state, payload)
        case GET_TREE_START:
            return getTreeStart(state, payload)
        case GET_INFO_TREE:
            return getInfoTree(state)
        default:
            return state
    }
}

export default treeReducer