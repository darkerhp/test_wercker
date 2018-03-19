import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from './actions'

let styles

class Home extends Component{
    render() { 
  const {
    container,
    text,
    button,
    buttonText,
    mainContent
  } = styles

  return (
    <View style={container}>
      <Text style={text}>Redux Examples</Text>
      <TouchableOpacity style={button} onPress={() => this.props.fetchData()}>
        <Text style={buttonText}>Load Data</Text>
      </TouchableOpacity>
      <View style={mainContent}>
      {
        this.props.appData.isFetching && <Text>Loading</Text>
      }
      {
        this.props.appData.data.length ? (
            this.props.appData.data.map((person, i) => {
            return <View key={i} >
              <Text>Name: {person.name}</Text>
              <Text>Age: {person.age}</Text>
            </View>
          })
        ) : null
      }
      </View>
    </View>
  )}
}

styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
})

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)