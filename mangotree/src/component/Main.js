import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#4DB6AC",
  },
  welcome: {
    fontSize: 40,
    fontWeight:"bold",
    textAlign: "center",
    color: "#ffffff"
  },
  img:{
    marginTop: "5%",
    marginBottom: "2%",
    marginRight: "10%",
    marginLeft: "10%",
    width: 111,
    height: 222
  },
  button: {
    height: 40,
    width:"40%",
    fontSize: 15,
    textAlign: "center",
    color: "#ffffff",
    marginTop: 10
  },
  top: {
    marginTop: 10
  }
});

class Main extends Component {
  static navigationOptions = {
    header:null
  }
  constructor(props){
    super(props);
    this.state={
      index: 0,
      year:0,
      max:(Math.floor(Math.random() * 25)+25),
      status:"",
      score:0,
      harvest:true,
      titleharvest:"Harvest"
    };
  }
  checkimage(){
    if(this.state.year<this.state.max*25/100){
      this.setState({
        status:"Bibit",
        index:1
      });
    }else if (this.state.year<this.state.max*50/100&&this.state.year>this.state.max*25/100) {
      this.setState({
        status:"Tumbuh",
        index:2
      });
    }else if (this.state.year<this.state.max*75/100&&this.state.year>this.state.max*50/100) {
      this.setState({
        status:"Berbuah",
        index:3,
        harvest:false
      });
    }else if (this.state.year>this.state.max*75/100) {
      this.setState({
        status:"Mati",
        index:4,
        harvest:true
      });
    }
  }
  emulatepress(){
    let temp=(Math.floor(Math.random() * 5)+1)+this.state.year;
    this.setState({
      year:temp
    });
    this.checkimage();
  }
  harvestpress(){
    let score=(Math.floor(Math.random() * this.state.max)+1);
    let titleharvest ="Harvest ("+score+")";
    this.setState({
      score,
      titleharvest
    });
    this.emulatepress();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hallo  {this.props.username} {"\n"}
          I am  {this.props.nametree} {"\n"}
          {this.state.year} year -{this.state.status}-
        </Text>
        <Image source={{uri:'./style/assets/' + this.state.index + '.png'}} style={styles.img} />
        <Button
          onPress={() => { this.emulatepress();}}
          title="Emulate"
          color="#009688"
          style={styles.buttonMulai}
        />
        <View style={styles.top}>
          <Button
            onPress={() => { this.harvestpress();}}
            disabled={this.state.harvest}
            title={this.state.titleharvest}
            color="#009688"
            style={styles.buttonMulai}
          />
        </View>
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
