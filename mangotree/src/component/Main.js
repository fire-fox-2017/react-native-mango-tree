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
    fontSize: 35,
    fontWeight:"bold",
    textAlign: "center",
    color: "#ffffff"
  },
  img:{
    width: 200,
    height: 200,
    marginLeft:"20%",
    marginBottom:5
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

const IMAGES = {
  image0: require("./0.png"),
  image1: require("./1.png"),
  image2: require("./2.png"),
  image3: require("./3.png"),
  image4: require("./4.png"),
};

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
      emulate:false,
      titleharvest:"Harvest",
      imgurl:["./0.png","./1.png","./2.png","./3.png","./4.png"],
      home:true,
      end:""
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
        harvest:false,
        emulate:true
      });
    }else if (this.state.year>this.state.max*75/100) {
      this.setState({
        status:"Mati",
        index:4,
        harvest:true,
        emulate:true,
        home:false,
        end:`---YOUR SCORE ${this.state.score}---`
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
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hallo  {this.props.username} {"\n"}
          I am  {this.props.nametree} {"\n"}
          {this.state.year} year -{this.state.status}-{"\n"}
          {this.state.end}
        </Text>
        <Image source={IMAGES["image"+this.state.index]} style={styles.img} />
        <Button
          onPress={() => { this.emulatepress();}}
          disabled={this.state.emulate}
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
        <View style={styles.top}>
          <Button
            onPress={() => {navigate("Home"); }}
            disabled={this.state.home}
            title="Home"
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
