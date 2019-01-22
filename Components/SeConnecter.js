
import t from 'tcomb-form-native';
import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'


const Form = t.form.Form;

const User = t.struct({
    email: t.String,
    password: t.String,

});

const options = {
    fields: {
        email: {
            error: 'Avez-vous oublié votre adresse email ?'
        },
        password: {
            error: 'Entrer votre mot de passe'
        },
    },
};

 class SeConnecter extends React.Component {

    handleSubmit = () => {
        const value = this._form.getValue();
        console.log('value: ', value);
    }

    render() {
        return (
            <View style = {styles.forms}>
                <Form
                    ref={c => this._form = c}
                    type={User}
                    options={options}
                />
                <Button
                style={{backgroundColor: "#f18a09"}}
                    title="Se connecter!"
                    onPress={this.handleSubmit}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    forms: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
});


const mapStateToProps = (state) => {
  return {
    favoritesChien: state.favoritesChien
  }
}


export default connect(mapStateToProps)(SeConnecter)