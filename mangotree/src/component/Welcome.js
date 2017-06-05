import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";
import { adddata } from "../data/action";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4DB6AC",
  },
  welcome: {
    fontSize: 30,
    fontWeight:"bold",
    textAlign: "center",
    color: "#ffffff"
  },
  title: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 17,
    fontWeight:"bold",
    textAlign: "center",
    color: "#ffffff"
  },
  inputText: {
    height: 40,
    width:"60%",
    borderColor: "gray",
    fontSize: 15,
    textAlign: "center",
    color: "#ffffff"
  },
  buttonMulai: {
    height: 40,
    width:"40%",
    fontSize: 15,
    textAlign: "center",
    color: "#ffffff"
  }
});

class Welcome extends Component {
  static navigationOptions = {
    header:null
  }
  constructor(props){
    super(props);
    this.state={
      username:"",
      nametree:""
    };
  }
  handlepress(){
    const obj={};
    obj.username=this.state.username;
    obj.nametree=this.state.nametree;
    this.props.adddata(obj);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome Mango Tree
        </Text>
        <Text style={styles.title}>
          USERNAME
        </Text>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => {this.setState({username:text}); }}
          value={this.state.username}
        />
        <Text style={styles.title}>
          NAME TREE
        </Text>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => {this.setState({nametree:text}); }}
          value={this.state.nametree}
        />
        <Button
          onPress={() => { this.handlepress();  navigate("Main");}}
          title="MUlai"
          color="#009688"
          style={styles.buttonMulai}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    adddata: (data) => {dispatch(adddata(data));}
  };
};

export default connect(null,mapDispatchToProps)(Welcome);
