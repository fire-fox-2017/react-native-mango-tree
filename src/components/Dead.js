import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

import { backToHome } from '../actions/index'

const styles = {
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10,
  },
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
}

class Dead extends React.Component {
  constructor(props) {
    super(props)
    this.backToHome = this.backToHome.bind(this)
  }

  backToHome() {
    this.props.backToHome()
		// alert('a')
  }

  render() {
    return (
      <View>
        <Text>
					Pohonnya Mati
				</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.backToHome}
        >
          <Text style={styles.text}>
						Back To Home
					</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  backToHome: () => {
    dispatch(backToHome())
  },
})

export default connect(null, mapDispatchToProps)(Dead)
