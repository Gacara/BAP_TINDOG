import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'



class ChienDetail extends React.Component {



_displayFavoriteImage() {
    var sourceImage = require('../img/nomatch.png')
    if (this.props.favoritesChien.findIndex(item => item.id === this.props.navigation.state.params.Chien.id) !== -1) {
    
      sourceImage = require('../img/match.png')
    }
    return (
      <Image
        style={styles.favorite_image}
        source={sourceImage}
      />
    )
}



  _toggleFavorite() {
        const action = { type: "TOGGLE_FAVORITE", value: this.props.navigation.state.params.Chien }
    this.props.dispatch(action)
    }

	render(){
          
		
		const imgChien1 = this.props.navigation.state.params.Chien.image
    const imgChien2 = this.props.navigation.state.params.Chien.image2
    const imgChien3 = this.props.navigation.state.params.Chien.image3
    const imgChien4 = this.props.navigation.state.params.Chien.image4

		const txtChien = this.props.navigation.state.params.Chien.overview
		  

		return (
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
            <Image resizeMode='stretch' style={styles.image} source={{uri: ''+`${imgChien1}`+'' }} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}></Text>}>
            <Image resizeMode='stretch' style={styles.image} source={{uri: ''+`${imgChien2}`+'' }} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}></Text>}>
            <Image resizeMode='stretch' style={styles.image} source={{uri: ''+`${imgChien3}`+'' }} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}></Text>}>
            <Image resizeMode='stretch' style={styles.image} source={{uri: ''+`${imgChien4}`+'' }} />
          </View>
        </Swiper>


        <TouchableOpacity
    style={styles.favorite_container}
    onPress={() => this._toggleFavorite()}>
    {this._displayFavoriteImage()}
</TouchableOpacity>

		<Text>{txtChien}</Text>
		</View>

		
		)
	}
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1,
	},
	 image: {
    width: 200,
    height: 300,
    marginLeft: 80,

    marginTop: 15,
    flex: 3,
    backgroundColor: 'gray'
  },
  wrapperpic: {
  	flex : 2
  },
  slide: {

    flex: 2,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

favorite_container: {
    alignItems: 'center', 
},
favorite_image: {
    width: 40,
    height: 40
},



})


const mapStateToProps = (state) => {
  return {
    favoritesChien: state.favoritesChien
  }
}


export default connect(mapStateToProps)(ChienDetail)