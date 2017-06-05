import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { getInfoTree, addAge, harvestMango, deadTree } from '../actions/index'

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
  },
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

  deadTree() {
    this.props.deadTree()
  }

  renderHarvest() {
    if (this.props.harvestStatus) {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={this.harvestMango}
        >
          <Text style={styles.text}>
						Harvest
					</Text>
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity style={styles.button} disabled>
        <Text style={styles.text}>
					Harvest
				</Text>
      </TouchableOpacity>
    )
  }

  render() {
    console.log('alive', this.props.alive)
    if (this.props.alive) {
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
          {this.renderHarvest()}
        </View>
      )
    }
    return (
      <View>
        {this.deadTree()}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  username: state.username,
  treename: state.treename,
  age: state.age,
  harvest: state.harvest,
  alive: state.alive,
  harvestStatus: state.harvestStatus,
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
  },
  deadTree: () => {
    dispatch(deadTree())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Tree)
