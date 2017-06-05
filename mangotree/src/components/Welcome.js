import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';

import { newTree } from '../actions';

class Welcome extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor() {
    super()
    this.state= {
      name: '',
      owner: '',
    }
  }

  submit() {
    const { navigate } = this.props.navigation
    navigate('Main')
    this.props.newTree({
      name: this.state.name,
      owner: this.state.owner
    })
  }
  render() {
    return (
      <View>
        <TextInput
          onChangeText={(name) => this.setState({name})}
          placeholder='tree name'
        />
        <TextInput
          onChangeText={(owner) => this.setState({owner})}
          placeholder='tree owner'
        />
        <Button
          title='New Tree'
          onPress={()=>this.submit()}
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  newTree: (details) => {
    dispatch(newTree(details))
  }
})

export default connect(null, mapDispatchToProps)(Welcome)