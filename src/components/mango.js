import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppRegistry, TextInput, Text, View, Button } from 'react-native';
import { addGrow } from '../actions/Action';

class Mango extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [
        // {
        //   name : 'edim',
      	// 	treeName: 'Mangoo',
      	// 	total : 0,
      	// 	harvest: 0,
      	// 	age: 0,
      	// }
      ]
    }
  }

  // componentDidMount() {
  //   this.props.fetchData()
  //   // console.log(this.state)
  // }

  onHandle() {
    // let random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    // let newData = {
    //   name : 'edim',
    //   treeName: 'Mangoo',
  	// 	total : this.state.data[0].total + random,
  	// 	harvest: 0,
  	// 	age: this.state.data[0].age+1,
    // }
    // let newState = {
    //   ...this.state, data : [...this.state.data, newData]
    // }
    // this.setState(newState)
  }
  onGrow(){
    this.props.addGrow()
  }

  render() {
    console.log(this.props.mangoes)
    if(this.props.mangoes.length == 0){
      return (<View><Text>Loading..</Text></View>)
    } else {
      console.log(this.props.mangoes)
      return (
        <View style={{ paddingTop: 55 }}>
          <Text>This is {this.props.mangoes.treeName}</Text>
          <Text>He is {this.props.mangoes.age} years old</Text>
            <Button
              onPress={() => this.onHandle()}
              title="Emulate"
              color="#841584"
            />
        </View>
    );
  }
  }
}

const mapStateToProps = state => ({
  mangoes: state,
});
const mapDispatchToProps = dispatch => ({
  // fetchData: () => dispatch(fetchData()),
  addGrow: () => dispatch(addGrow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mango);
// export default Mango
