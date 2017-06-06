import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image } from 'react-native';
import { connect } from 'react-redux';

import { growSuccess, harvestSuccess } from '../actions';

class MainScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      toggleHarvest: true,
      growthStats: 0,
    };
  }

  checkFruit(fruit) {
    if (fruit !== 0) {
      this.setState({
        toggleHarvest: false
      })
    } else {
      this.setState({
        toggleHarvest: true
      })
    }
  }

  growTree = () => {
    this.props.growSuccess();
    this.checkFruit(this.props.tree.fruit);
    if(this.props.tree.status === 'dead') {
      const { navigate } = this.props.navigation;
      navigate('GameOver');
    } else if (this.props.tree.age === Math.floor(this.props.tree.harvestAge * (1 / 3))) {
      this.setState({
        growthStats: 1
      });
    } else if (this.props.tree.age === Math.floor(this.props.tree.harvestAge * (2 / 3))) {
      this.setState({
        growthStats: 2
      });
    } else if (this.props.tree.age === this.props.tree.harvestAge) {
      this.setState({
        growthStats: 3
      });
    } else if (this.props.tree.age === this.props.tree.maxAge) {
      this.setState({
        growthStats: 4
      })
    }
  }

  harvestTree = () => {
    this.props.harvestSuccess();
    this.checkFruit(this.props.tree.fruit);
  }

  render() {
    let img = require(`../../assets/0.png`);
    if (this.state.growthStats === 1) {
      img = require(`../../assets/1.png`);
    } else if (this.state.growthStats === 2) {
      img = require(`../../assets/2.png`);
    } else if (this.state.growthStats === 3) {
      img = require(`../../assets/3.png`);
    } else if (this.state.growthStats === 4) {
      img = require(`../../assets/4.png`);
    }

    return (
      <View>
        <Text>Hello, {this.props.tree.name}!</Text>
        <Text>This is "{this.props.tree.plantName}", your tree.</Text>
        <Text>He is now {this.props.tree.age} {this.props.tree.age > 1 ? 'years' : 'year'} old.</Text>
        <Text>Fruits harvested: {this.props.tree.harvest}</Text>
        <Image source={img} />
        <Button
          onPress={() => this.growTree()}
          title="Emulate"
          color="green"
        />
        <Button
          onPress={() => this.harvestTree()}
          title="Harvest"
          disabled={this.state.toggleHarvest}
          color="green"
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  tree: state.tree
})

const mapDispatchToProps = dispatch => ({
  harvestSuccess: () => {
    dispatch(harvestSuccess());
  },
  growSuccess: () => {
    dispatch(growSuccess());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);