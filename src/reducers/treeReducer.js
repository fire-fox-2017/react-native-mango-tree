import {
    GET_USER_NAME,
    GET_TREE_NAME,
    GET_TREE_START,
    GET_INFO_TREE,
    ADD_AGE,
    HARVEST_MANGO,
    DEAD_TREE,
    BACK_TO_HOME
} from '../actions/constant.js'

const initialState = {
    username: '',
    treename: '',
    age: 0,
    ageHarvest: Math.floor((Math.random() * 5) + 1),
    ageDead: Math.floor((Math.random() * 7) + 5),
    harvest: 0,
    alive: true,
    harvestStatus: false
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

const addAge = (state, data) => {

    const { age, ageHarvest, ageDead, harvest, harvestStatus } = state

    var umur = data + 1
    var buah = 0
    var petik = null
    var status = true

    let newState = {}

    if (umur >= ageDead) {
        var status = false
    } else {
        if (umur >= ageHarvest) {
            buah = Math.floor((Math.random() * 10) + 1)
        }
    }

    if (status) {
        let newState = {
            ...state,
            age: umur,
            harvest: buah,
            alive: true,
            harvestStatus: petik
        }
        return newState
    } else {
        let newData = {
            ...state,
            alive: false
        }
        return newData
    }



}

const harvestMango = state => {
    let newState = {
        ...state,
        harvest: 0
    }

    return newState
}

const deadTree = state => {
    let newState = {
        ...state,
        alive: false,
        harvestStatus: false
    }

    return newState
}

const backToHome = state => {
    let newState = {
        ...state,
        username: '',
        treename: '',
        age: 0,
        ageHarvest: Math.floor((Math.random() * 5) + 1),
        ageDead: Math.floor((Math.random() * 7) + 5),
        harvest: 0,
        alive: true,
        harvestStatus: false
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
        case ADD_AGE:
            return addAge(state, payload)
        case HARVEST_MANGO:
            return harvestMango(state)
        case DEAD_TREE:
            return deadTree(state)
        case BACK_TO_HOME:
            return backToHome(state)
        default:
            return state
    }
}

export default treeReducer