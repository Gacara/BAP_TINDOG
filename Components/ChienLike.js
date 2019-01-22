

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, ImageBackground, Button } from 'react-native'

class ChienLike extends React.Component {

 render() {

    const { chien, displayDetailChien } = this.props
    return (
      <View style={styles.main_container}>
      <TouchableOpacity
      onPress={() => displayDetailChien(chien)}
       style={styles.img_container}>
       
       <ImageBackground  style={styles.image} source={{uri: chien.image }}>
        <Text style={styles.title_text}>{chien.chien}, {chien.age}</Text>
 </ImageBackground>
       </TouchableOpacity>
 
  </View>


    )
}
}


const styles = StyleSheet.create({
  main_container: {
    height: 100,
    flexDirection: 'row',
    margin: 10,
    marginBottom: 10,
       paddingTop: 23,

  },
   img_container: {

     marginLeft: 8,
    height: 80,
    width: 80,
    borderRadius: 40,
    overflow: 'hidden'
  },

  image: {
       height: 80,
    width: 80,
    borderRadius: 40,
  },

  title_text: {
    fontWeight: 'bold',
    paddingTop: 10,
    flex: 1,
    flexWrap: 'wrap',
    color: 'white',
   
     textAlign: 'center',

  },


 




})

export default ChienLike