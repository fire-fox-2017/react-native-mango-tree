import React from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { gameStart, gameOver, harvest } from '../actions'


class Emulate extends React.Component {
  constructor(props) {
    super(props)
    console.log("emulate consturctor", this.props)
    this.state = {
      age: 0,
      fruits: 0,
    }
  }

  // componentDidMount() {
  //   console.log("componentDidMount")
  //   console.log(this.props)
  //   // this.setState({
  //   //   name: this.props.data.name
  //   // })
  //   this.props.gameStart(this.props.temp)
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps",nextProps.data)
  //   if (nextProps.data !== this.props.data) {
  //     this.setState({
  //       name: nextProps.data.name)
  //     })
  //   }
  // }

  getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onPressEmulate() {
    // add age
    console.log("onPressEmulate", this.state.age)
    const random_num = this.getRandomInt(1,5)
    const random_num_fruits = this.getRandomInt(10,20)
    console.log("----> random_num", random_num)
    this.setState({
      age: this.state.age + random_num,
      fruits: this.state.fruits + random_num_fruits
    }, () => {
      console.log("set state hahah")

      if(this.state.age >= this.props.max_age){
        //go to gameover page
        this.props.gameOver(this.state.age)
        Actions.Gameover()
      }
    })
  }

  onPressHarvest() {
    console.log('onPressHarvest')
    const temp_fruits = this.state.fruits
    this.setState({
      fruits: 0
    }, () => {
      this.props.harvest(temp_fruits)
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Emulate</Text>
        <Text>Tree Name: {this.props.name}!!</Text>
        <Text>Max Age: {this.props.max_age}</Text>
        <Text>Age: {this.state.age}</Text>
        <Text>Fruits: {this.state.fruits}</Text>
        <Text>Harvested: ({this.props.harvested})</Text>

        <TouchableOpacity style={styles.harvestButton} onPress={() => this.onPressHarvest() } >
          <Text>Harvest</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.emulateButton} onPress={() => this.onPressEmulate() } >
          <Text>Emulate</Text>
        </TouchableOpacity>


      </View>
    )
  }

}


const styles = {
  container: {
    flex: 1,
    marginTop: 50
  },
  harvestButton: {
    margin: 0,
    padding: 10,
    backgroundColor: '#EFDC05',
  },
  emulateButton: {
    margin: 0,
    padding: 10,
    backgroundColor: '#30A9DE',
  }

}


const mapStateToProps = (state) => {
  return {
    name: state.MangoReducer.name,
    max_age: state.MangoReducer.max_age,
    harvested: state.MangoReducer.harvested
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gameStart: (data) => { dispatch(gameStart(data)) },
    gameOver: (age) => { dispatch(gameOver(age)) },
    harvest: (fruits) => { dispatch(harvest(fruits)) }
  }
}

const connectedEmulate = connect(mapStateToProps, mapDispatchToProps)(Emulate)
export default connectedEmulate
