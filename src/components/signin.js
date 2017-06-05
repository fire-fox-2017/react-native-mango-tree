import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Button,  } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { signin } from '../actions/Action';

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      treeName: ''
    }
  }

  onMangoPage() {
    this.props.signin(this.state)
    Actions.pageMango()
  }

  render() {
    return (
      <View style={{ paddingTop: 55, padding: 40 }}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(treeName) => this.setState({treeName})}
          value={this.state.treeName}
        />
        <Button
          onPress={() =>  this.onMangoPage()}
          title="Sign In"
          color="#626FE6"
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signin: (data) => dispatch(signin(data)),
});

export default connect(null, mapDispatchToProps)(Signin);
