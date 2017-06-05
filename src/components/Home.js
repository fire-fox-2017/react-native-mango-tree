import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { getUserName, getTreeName, getTreeStart } from '../actions/index'

import { connect } from 'react-redux'

const styles = {
  inputStyle: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
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
  },
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.onUserNameChange = this.onUserNameChange.bind(this)
    this.onTreeNameChange = this.onTreeNameChange.bind(this)
    this.getTreeStart = this.getTreeStart.bind(this)
  }

  onUserNameChange(username) {
    this.props.getUserName(username)
  }

  onTreeNameChange(treename) {
    this.props.getTreeName(treename)
  }

  getTreeStart() {
    const { username, treename } = this.props
    let data = {
      username,
      treename,
    }
		// console.log(data)
    this.props.getTreeStart(data)
  }

  render() {
    console.log('props username', this.props.username)
    console.log('props treename', this.props.treename)
    return (
      <View>
        <TextInput
          autoCapitalize="none"
          placeholder="Your Name"
          style={styles.inputStyle}
          onChangeText={this.onUserNameChange}
          value={this.props.username}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Give Your Tree Name"
          style={styles.inputStyle}
          onChangeText={this.onTreeNameChange}
          value={this.props.treename}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.getTreeStart}
        >
          <Text style={styles.text}>
						Submit
					</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const mapStateToProps = state => ({
  username: state.username,
  treename: state.treename,
})

const mapDispatchToProps = dispatch => ({
  getUserName: (username) => {
    dispatch(getUserName(username))
  },
  getTreeName: (treename) => {
    dispatch(getTreeName(treename))
  },
  getTreeStart: (data) => {
    dispatch(getTreeStart(data))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
