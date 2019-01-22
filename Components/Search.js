import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator } from 'react-native'
import chiens from '../Helpers/chiensData'
import ChienItem from './ChienItems'
import ChienList from './ChienList'
import ChienLike from './ChienLike'



class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
      
        

 <FlatList
          data={chiens}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <ChienItem chien={item} displayDetailChien={this._displayDetailChien}/>}
         
        />


          <ChienList
          navigation={this.props.navigation} 

        />

        
      </View>
    )
  }


_displayDetailChien = (Chien) => {
  this.props.navigation.navigate("ChienDetail", { Chien: Chien})
  console.log("idChien:" + Chien);
}


}


const styles = StyleSheet.create({
  main_container: {
    flex: 1,
 
  },
  textinput: {
    marginTop: 4,
    marginLeft: 5,
    marginRight: 5,
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search