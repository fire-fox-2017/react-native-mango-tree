import React from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image
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
      fruits_bad: 0,
      fruits_good: 0,
      treeImage: 0
    }

  }


  getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onPressEmulate() {
    // add age
    console.log("onPressEmulate", this.state.age)
    const random_num = this.getRandomInt(1,5)
    const random_num_fruits = this.getRandomInt(10,20)

    const random_num_fruits_bad = this.getRandomInt(10,20)
    const random_num_fruits_good = this.getRandomInt(10,20)

    console.log("----> random_num", random_num)

    // update image
    const temp = this.props.max_age/5
    const total_age = this.state.age + random_num
    let treeImageIndex = 0
    console.log('this.treeImage', this.treeImage)
    if(total_age < temp)
      treeImageIndex = 0
    else if(temp <= total_age && total_age < temp*2)
      treeImageIndex = 1
    else if(temp*2 <= total_age && total_age < temp*3)
      treeImageIndex = 2


    this.setState({
      age: this.state.age + random_num,
      fruits: this.state.fruits + random_num_fruits_bad + random_num_fruits_good,
      fruits_bad: this.state.fruits_bad + random_num_fruits_bad,
      fruits_good: this.state.fruits_good + random_num_fruits_good,
      treeImage: treeImageIndex
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
      fruits: 0,
      fruits_bad: 0,
      fruits_good: 0
    }, () => {
      this.props.harvest(temp_fruits)
    })
  }

  render () {
    return (
      <View style={styles.container}>

        <Image
          style={styles.treeImage}
          source={require(`../assets/0.png`)}
        />

        <Text>Emulate</Text>
        <Text>Tree Name: {this.props.name}!!</Text>
        <Text>Max Age: {this.props.max_age}</Text>
        <Text>Age: {this.state.age}</Text>
        <Text>Fruits: {this.state.fruits}</Text>
        <Text>Fruits BAD: {this.state.fruits_bad}</Text>
        <Text>Fruits GOOD: {this.state.fruits_good}</Text>

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
    marginTop: 50,
    alignItems: 'center'
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
  },
  treeImage: {
    width: 200,
    height: 200,
    padding: 10,
    margin: 10,
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
