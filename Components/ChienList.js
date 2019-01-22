import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import ChienItem from './ChienItems'
import { connect } from 'react-redux'
import chiens from '../Helpers/chiensData'
import ChienLike from './ChienLike'



class ChienList extends React.Component {




 componentDidMount(){

   console.log(this.props.favoritesChien)
 }

 componentDidUpdate(){
    console.log("AAAAAAAAAAAAA : ")
    console.log(this.props.favoritesChien)
 }

  constructor(props) {
    super(props)
    this.state = {
      chiens: []
    }
  }


  _displayDetailChien = (Chien) => {
    console.log(this.props.favoritesChien)
    this.props.navigation.navigate("Chat", { Chien: Chien})
    
  }

  render() {
    return (


        <FlatList

          style={styles.list}
          data={this.props.favoritesChien}
          extraData={this.props.favoritesChien}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <ChienLike
              chien={item}
              isChienFavorite={(this.props.favoritesChien.findIndex(chien => chien.id === item.id) !== -1) ? true : false}
              displayDetailChien={this._displayDetailChien}
            />
          )}
       
        
        />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,

  }
})

const mapStateToProps = state => {
  return {
    favoritesChien: state.favoritesChien
  }
}

export default connect(mapStateToProps)(ChienList)