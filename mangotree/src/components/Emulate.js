import React from 'react'
import {
  View,
  Text,

} from 'react-native'
import { connect } from 'react-redux'


class Emulate extends React.Component {
  constructor(props) {
    super(props)
    console.log("emulate consturctor", this.props.data)
    this.state = {
      name: this.props.data.name
    }
  }

  componentDidMount() {
    this.setState({
      name: this.props.data.name
    })
  }
  //
  // componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps",nextProps.data)
  //   if (nextProps.data !== this.props.data) {
  //     this.setState({
  //       name: nextProps.data.name)
  //     })
  //   }
  // }


  render () {
    return (
      <View style={styles.container}>
        <Text>Emulate</Text>
        <Text>{this.props.data.name}!!</Text>

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
    data: state.MangoReducer.data
  }
}

const connectedEmulate = connect(mapStateToProps, null)(Emulate)
export default connectedEmulate
