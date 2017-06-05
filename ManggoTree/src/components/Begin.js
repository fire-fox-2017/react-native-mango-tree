import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      hasHarvest: true
    }
  }

  handleButton(){
    this.props.startGrow();
  }

  handleButtonHarvest(){
    this.props.getHarvest();
    this.setState({ status: true, hasHarvest: false })
  }

  render() {
    let pictureDead = require('../assets/4.png')
    const { navigation, getName } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.getFirst}>
          {this.state.status ? <Text style={{ fontSize: 20 }}>
            Your got {getName.harvestResult} fruits
          </Text> : <Text style={{ fontSize: 20 }}>
            Harvest Not Yet
          </Text>
        }
        </View>
        {getName.grow > getName.maxAge ?
          <View style={styles.getSecond}>
            <Text style={styles.welcome}>
              This is {getName.name} is DEAD
            </Text>
            <Text style={styles.welcome}>
              GAME OVER
            </Text>
            <Image
              style={{ width: 100, height: 100 }}
              source={pictureDead}
            />
            <View style={{marginTop: 10}}>
              <Button
                style={{ paddingRight: 10 }}
                onPress={() => { navigation.goBack(); }}
                title="Retry"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View> :
          <View style={styles.getSecond}>
            <Text style={styles.welcome}>
              This is {getName.name} Tree
            </Text>
            <Text style={styles.welcome}>
              The Tree {getName.grow} Year's old
            </Text>
            {getName.grow === 0 ?
              <Image
              style={{ width: 100, height: 100 }}
              source={require('../assets/0.png')}
            /> : getName.grow < 4? <Image
              style={{ width: 100, height: 100 }}
              source={require('../assets/1.png')}
            /> : getName.grow === getName.harvest ?
            <Image
              style={{ width: 100, height: 100 }}
              source={require('../assets/3.png')}
            /> :
            <Image
              style={{ width: 100, height: 100 }}
              source={require('../assets/2.png')}
            />
          }

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Button
                style={{ marginRight: 10 }}
                onPress={() => { this.handleButton(); }}
                title="Start"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
              { getName.grow >= getName.harvest && this.state.hasHarvest ?
                <Button
                  onPress={() => { this.handleButtonHarvest()}}
                  title="Harvest"
                  color="#158548"
                  accessibilityLabel="Learn more about this purple button"
                /> : <View />}
              </View>
          </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#18a3d6',
  },
  getFirst: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  getSecond: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const stateToProps = state => ({
  getName: state.statusharverst
})

const dispatchToState = dispatch => ({
  startGrow: () => dispatch({ type: 'ADD_AGE' }),
  getHarvest: () => dispatch({ type: 'HARVEST' }),
})


export default connect(stateToProps, dispatchToState)(Welcome)