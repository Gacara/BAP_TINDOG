

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'


class ChienItem extends React.Component {

 render() {
    const chien = this.props.chien
     const displayDetailChien = this.props.displayDetailChien
    //const { chien, displayDetailChien } = this.props
    return (
      <TouchableOpacity
      onPress={() => displayDetailChien(chien)}
       style={styles.main_container}>
       
       <ImageBackground  style={styles.image} source={{uri: chien.image }}>
        <Text style={styles.title_text}>{chien.chien}, {chien.age}</Text>
       </ImageBackground>



      </TouchableOpacity>
    )
}
}

const styles = StyleSheet.create({
  main_container: {
    height: 450,
    flexDirection: 'row'
  },
  image: {
    width: '100%',
   height: '100%',
    margin: 5,
    flex:1,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5,
    marginBottom: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    color: 'white',
    paddingTop: '100%',
    bottom: 20,
     textAlign: 'center',

  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default ChienItem