import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

import { growTree, harvestTree } from '../actions';

class Main extends Component {
  static navigationOptions = {
    title: 'Grow your tree!',
  };
  constructor(props) {
    super(props);
    this.state = {
      died: false,
    };
  }

  good() {
    return Math.floor(this.props.tree.harvested * 0.7);
  }

  harvest() {
    this.props.harvestTree(this.props.tree);
  }

  grow() {
    this.props.growTree(this.props.tree);
    if(this.props.tree.age === this.props.tree.maximum_age) {
      const { navigate } = this.props.navigation
      navigate('Over');
      this.setState({ died: true });
    }
  }

  render() {
    return (
      <View>
        <Text>name: {this.props.tree.name}</Text>
        <Text>age: {this.props.tree.age}</Text>
        <Text>fruit: {this.props.tree.fruit}</Text>
        <Text>harvested: {this.good()} good, {this.props.tree.harvested-this.good()} bad</Text>
        <Button
          title="Grow!"
          onPress={() => this.grow()}
          disabled={this.state.died}
        />
        <Button
          title="Harvest!"
          onPress={() => this.harvest()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  tree: state,
});

const mapDispatchToProps = dispatch => ({
  growTree: (tree) => {
    dispatch(growTree(tree));
  },
  harvestTree: (tree) => {
    dispatch(harvestTree(tree));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
