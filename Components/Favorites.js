

import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'


class Favorites extends React.Component {

  render() {
    return (
      <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
    )
  }
}

const styles = StyleSheet.create({})



const mapStateToProps = (state) => {
  return {
    favoritesChien: state.favoritesChien
  }
}


export default connect(mapStateToProps)(Favorites)