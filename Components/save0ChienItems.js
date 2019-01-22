

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'

class ChienItem extends React.Component {

 render() {
 
    const chien = this.props.chien
     const displayDetailChien = this.props.displayDetailChien
    //const { chien, displayDetailChien } = this.props
    return (

      <View style={styles.img_container}>


      <TouchableOpacity style={styles.content_container}
        onPress={() => displayDetailChien(chien)}>
       <Image resizeMode='stretch' style={styles.img} source={require('../img/i.png')} />
       </TouchableOpacity>
         </View>
       
          <View style={styles.main_container}>

        
            <Swiper style={styles.wrapperpic}  
          showsButtons
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          
          dot={<View style={{backgroundColor: 'rgba(250, 170, 66, 0.72)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: 'orange', width: 10, height: 10, borderRadius: 5, marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: 3}} />}
          paginationStyle={{
            bottom: 10, left: 0, right: 0
          }} loop>
          <View style={styles.slide} title={<Text numberOfLines={1}></Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('../img/1.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}></Text>}>
             <Image resizeMode='stretch' style={styles.image} source={require('../img/2.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}></Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('../img/3.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}></Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('../img/4.jpg')} />
          </View>
        </Swiper>
        
        
      </View>


    )
}
}

const styles = StyleSheet.create({
  main_container: {
    height: 400,
    
  },
   img_container: {
    height: 50,
    zIndex: 1,
    
  },
  image: {
    width: 200,
    height: 300,
    margin: 0,
    backgroundColor: 'gray'
  },
  img: {
    position: 'absolute',
    top: 10,
    left:5,
    width: 25,
    height: 25,
    margin: 5,
    backgroundColor: 'transparent',
    zIndex: 1,
   
  },
  content_container: {
    flex: 1,
    height: 10,
    width:50,
    margin: 5,
    marginBottom: 0
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
    paddingRight: 5
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
  },

  wrapperpic: {
    width: 500,
    position: 'absolute',
    zIndex: 2,
    flex : 1,
  },


  slide: {

    flex: 3,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },


})

export default ChienItem