import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

import { growTree } from '../actions'

class Main extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.tree.name}</Text>
        <Text>{this.props.tree.age}</Text>
        <Text>{this.props.tree.fruit}</Text>
        <Text>{this.props.tree.harvested}</Text>
        <Button
          title='Grow!'
          onPress={()=>this.props.growTree(this.props.tree)}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  tree: state
})

const mapDispatchToProps = dispatch => ({
  growTree: (tree) => {
    dispatch(growTree(tree))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)