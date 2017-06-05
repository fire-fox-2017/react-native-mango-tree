import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import {
    getInfoTree,
    addAge,
    harvestMango
} from '../actions/index'

import { connect } from 'react-redux'

const styles = {
    button: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10,
    },
    text: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
}

class Tree extends React.Component {

    constructor(props) {
        super(props)
        this.addAge = this.addAge.bind(this)
        this.harvestMango = this.harvestMango.bind(this)
    }

    componentDidMount() {
        this.props.getInfoTree()
    }

    addAge() {
        this.props.addAge(this.props.age)
    }

    harvestMango() {
        this.props.harvestMango()
    }

    render() {
        return (
            <View>
                <Text>Age : {this.props.age}</Text>
                <Text>Harvest : {this.props.harvest}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.addAge}
                >
                    <Text style={styles.text}>
                        Emulate
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.harvestMango}
                >
                    <Text style={styles.text}>
                        Harvest
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const mapStateToProps = state => ({
    username: state.username,
    treename: state.treename,
    age: state.age,
    harvest: state.harvest,
    alive: state.alive
})

const mapDispatchToProps = dispatch => ({
    getInfoTree: () => {
        dispatch(getInfoTree())
    },
    addAge: (age) => {
        dispatch(addAge(age))
    },
    harvestMango: () => {
        dispatch(harvestMango())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Tree)