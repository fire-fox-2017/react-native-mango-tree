import {
    GET_USER_NAME,
    GET_TREE_NAME
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

const getTreeName = (state, data)

const treeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER_NAME:
            return getUserName(state, payload)
        case GET_TREE_NAME:
            return getTreeName(state, payload)
        default:
            return state
    }
}