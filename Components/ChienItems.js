

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, ImageBackground, Button } from 'react-native'

class ChienItem extends React.Component {

 render() {

    const { chien, displayDetailChien } = this.props
    return (
      <View>
      <TouchableOpacity
      onPress={() => displayDetailChien(chien)}
       style={styles.main_container}>
       
       <ImageBackground  style={[styles.image, styles.image1]} source={{uri: chien.image }}>
        <Text style={styles.title_text}>{chien.chien}, {chien.age}</Text>
 </ImageBackground>
       </TouchableOpacity>


      
  </View>


    )
}
}

const styles = StyleSheet.create({
  main_container: {
    height: 450,
    flexDirection: 'row'
  },

  image: {
      position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex:1,
    backgroundColor: 'gray'
    
  },

  image1: {
    width: '100%',
   height: '100%',
    margin: 5,

  },
image2: {

    width: '50%',
   height: '50%',
    margin: 10,
    
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
    bottom: 30,
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
    fontSize: 14,
  },
  
 




})

export default ChienItem