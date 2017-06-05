import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import {
    getInfoTree
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


    componentDidMount() {
        this.props.getInfoTree()
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.getTreeStart}
                >
                    <Text style={styles.text}>
                        Emulate
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.getTreeStart}
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
    harvest: state.harvest
})

const mapDispatchToProps = dispatch => ({
    getInfoTree: () => {
        dispatch(getInfoTree())
    }
})


export default connect(null, null)(Tree)