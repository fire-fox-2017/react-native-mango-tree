import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4DB6AC",
  },
  welcome: {
    fontSize: 40,
    fontWeight:"bold",
    textAlign: "center",
    margin: 10,
    color: "#ffffff"
  }
});

class Main extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hallo {{this.props.username}} <br />
          I am {{this.props.nametree}}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username :state.username,
    nametree :state.nametree
  };
};

export default connect(mapStateToProps,null)(Main);
