import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

import { growTree, harvestTree } from '../actions'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state= {
      died: false
    }
  }

  grow() {
    this.props.growTree(this.props.tree)
    if(this.props.tree.age === this.props.tree.maximum_age){
      const { navigate } = this.props.navigation
      navigate('Over')
      this.setState({ died: true })
    }
  }

  render() {
    return (
      <View>
        <Text>name: {this.props.tree.name}</Text>
        <Text>age: {this.props.tree.age}</Text>
        <Text>fruit: {this.props.tree.fruit}</Text>
        <Text>harvested: {this.props.tree.harvested}</Text>
        <Button
          title='Grow!'
          onPress={()=>this.grow()}
          disabled={this.state.died}
        />
        <Button
          title='Harvest!'
          onPress={()=>this.props.harvestTree(this.props.tree)}
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
  },
  harvestTree: (tree) => {
    dispatch(harvestTree(tree))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)