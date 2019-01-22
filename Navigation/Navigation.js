import React from 'react'
import { StyleSheet, Image } from 'react-native';

import { createStackNavigator, createAppContainer, createBottomTabNavigator  } from 'react-navigation'

import Search from '../Components/Search'
import ChienDetail from '../Components/ChienDetail'
import Favorites from '../Components/Favorites'
import Forms from '../Components/Forms'
import SeConnecter from '../Components/SeConnecter'
import ChienList from '../Components/ChienList'
import Chat from '../Components/Chat'
import Profil from '../Components/Profil'

const SearchStackNavigator = createStackNavigator({
 
  Search: { 
    screen: Search,
    navigationOptions: {
      title: 'Tindog'
    }
  },
ChienDetail: {
	screen: ChienDetail
},
Chat: {
  screen: Chat
},


})

const ChiensTabNavigator = createBottomTabNavigator({

User: {
    screen: Forms,
    navigationOptions: {
      
        tabBarIcon: () => { 
          return <Image
            source={require('../img/user.png')}
            style={styles.icon}/> 
        }
      }
  },

  Settings: {
    screen: Profil,
     navigationOptions: {

        tabBarIcon: () => { 
          return <Image
            source={require('../img/settings.png')}
            style={styles.icon}/> 
        }
      }
  },




  Search: {
    screen: SearchStackNavigator,
     navigationOptions: {

        tabBarIcon: () => { 
          return <Image
            source={require('../img/home.png')}
            style={styles.icon}/> 
        }
      }
  },



  Favorites: {
    screen: ChienList,
    navigationOptions: {
     	
        tabBarIcon: () => { 
          return <Image
            source={require('../img/chat.png')}
            style={styles.icon}/> 
        }
      }
  },


 
},

{
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD', 
      inactiveBackgroundColor: '#FFFFFF', 
      showLabel: false, 
      showIcon: true 
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})


const App = createAppContainer(ChiensTabNavigator);
export default App;



