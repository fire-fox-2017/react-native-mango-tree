import React from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { gameStart } from '../actions'


class Emulate extends React.Component {
  constructor(props) {
    super(props)
    console.log("emulate consturctor", this.props)
    this.state = {
      age: 0
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
    const random_num = this.getRandomInt(0,5)
    console.log("----> random_num", random_num)
    this.setState({
      age: this.state.age + random_num
    }, () => {
      console.log("set state hahah")
      if(this.state.age >= this.props.max_age){
        //go to gameover page
        Actions.Gameover()
      }
    })



  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Emulate</Text>
        <Text>{this.props.name}!!</Text>
        <Text>{this.props.max_age}</Text>
        <Text>{this.state.age}</Text>



        <Button title="Emulate" onPress={() => this.onPressEmulate() } />



      </View>
    )
  }

}


const styles = {
  container: {
    flex: 1,
    marginTop: 50
  }
}


const mapStateToProps = (state) => {
  return {
    name: state.MangoReducer.name,
    max_age: state.MangoReducer.max_age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gameStart: (data) => { dispatch(gameStart(data)) }
  }
}

const connectedEmulate = connect(mapStateToProps, mapDispatchToProps)(Emulate)
export default connectedEmulate
