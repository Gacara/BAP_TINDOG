

import React, { Component } from 'react'
import { StyleSheet, View, Text,TextInput, Image, TouchableOpacity, Button, Slider, Picker} from 'react-native'
import { connect } from 'react-redux'






class Profil extends React.Component {

state = {
    value: 0.3,
  };

   
    render() {
        return (


            
           <View style={{flex: 1, paddingTop:0, justifyContent: 'center',
                alignItems: 'center',}}>
           

           <Image
          style={{width: 50, height: 50}}
          source={require('../img/logo.png')}
        />

        



           <Text style={{paddingBottom:40,fontSize: 25, fontWeight:'500'}}>Réglages : </Text>
            


        
<View style={{flexDirection: 'row', paddingBottom:40}}>
 <Text style={{marginTop:20,fontWeight:'500'}}>Zone de recherche :  {this.state.value} km</Text>
  <Slider
  style={{marginBot:20, width: 150}}
    minimumValue={0}
    maximumValue={20}
    thumbTintColor="#e73c24"
    minimumTrackTintColor="#f18a09"
    maximumTrackTintColor="#f18a09"
    step={0.5}
    value={this.state.value}
    onValueChange={(value) => this.setState({value})} />
    </View>


<View style={{flexDirection: 'row'}}>
<Text style={{fontSize: 15, paddingBottom:40,fontWeight:'500',textAlign:'left'}}>Tranche d'âge : </Text>
    <Picker
  selectedValue={this.state.age}
  style={{  color:"white", backgroundColor: "#f18a09", height: 35, width: 150 }}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.setState({age: itemValue})}>
  <Picker.Item label="0 - 4 ans" value="age1" />
  <Picker.Item label="5 - 9 ans" value="age2" />
  <Picker.Item label="10 - 14 ans" value="age3" />
  <Picker.Item label="14 ans +" value="age4" />
</Picker>
 </View>


<View style={{flexDirection: 'row'}}>
<Text style={{fontSize: 15, paddingBottom:40,fontWeight:'500',textAlign:'left'}}>Sexe : </Text>
    <Picker
  selectedValue={this.state.sexe}
  style={{ color:"white", backgroundColor: "#f18a09",height: 35, width: 150, }}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.setState({sexe: itemValue})}>
  
  <Picker.Item label="Mâle" value="sexem" />
  <Picker.Item label="Femelle" value="sexef" />
</Picker>
 </View>


   
<View style={{flexDirection: 'row'}}>
    <Text style={{fontSize: 15,fontWeight:'500',textAlign:'left'}}>Objectif : </Text>
    <Picker
  selectedValue={this.state.language}
  style={{ color:"white", backgroundColor: "#f18a09", height: 35, width: 150 }}
  mode="dropdown"
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Jouer" value="Jouer" />
  <Picker.Item label="Reproduction" value="Reproduction" />
</Picker>
 </View>


<View style={{paddingTop: 40 }}>
<Button
  onPress={() => this.props.navigation.navigate('Search')}
  title="Valider"
  style={{ height: 20}}
  color="#f28c09"
  accessibilityLabel="Valider"
/>
</View>


  </View>

        );
    }
}

const styles = StyleSheet.create({

    button: {
        fontSize: 10,
        borderColor: 5,
    },
    container: {
        padding: 20,
        marginTop: 50,
    },
});


const mapStateToProps = (state) => {
  return {
    favoritesChien: state.favoritesChien
  }
}


export default connect(mapStateToProps)(Profil)