import {
    GET_USER_NAME,
    GET_TREE_NAME,
    GET_TREE_START
} from '../actions/constant.js'

const initialState = {
    username: '',
    treename: ''
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

const treeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER_NAME:
            return getUserName(state, payload)
        case GET_TREE_NAME:
            return getTreeName(state, payload)
        case GET_TREE_START:
            return getTreeStart(state, payload)
        default:
            return state
    }
}

export default treeReducer