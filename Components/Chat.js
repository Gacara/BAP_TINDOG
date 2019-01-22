

import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'

import { GiftedChat } from 'react-native-gifted-chat'
 
class Chat extends React.Component {
  state = {
    messages: [],
  }
 
  componentWillMount() {
    const imgChien = this.props.navigation.state.params.Chien.image140
    const nomChien = this.props.navigation.state.params.Chien.chien

    console.log(`${imgChien}`);
    console.log(imgChien);
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Chat\'lu, je suis un '+ `${nomChien}` + ' ! :)',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Moi',
            avatar: ''+`${imgChien}`+'',
          },
        },
      ],
    })
  }
 
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
 
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}


const mapStateToProps = (state) => {
  return {
    favoritesChien: state.favoritesChien
  }
}


export default connect(mapStateToProps)(Chat)
