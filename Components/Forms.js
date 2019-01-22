
import t from 'tcomb-form-native';
import React, { Component } from 'react'
import { StyleSheet, View, Text,TextInput, Image, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'

const Form = t.form.Form;


const User = t.struct({
    email: t.String,
    password: t.String,
    confirmPassword: t.String,
});

const options = {
    fields: {
        email: {
            error: 'Vous devez saisir une adresse email valide'
        },
        password: {
            error: 'Choisissez un mot de passe'
        },
        confirmPassword: {
            error: 'Ce mot de passe est incorrect'
        },
    },
};

class Forms extends React.Component {

    handleSubmit = () => {
        const value = this._form.getValue(); 
        console.log('value: ', value);
    };

    render() {
        return (
            <View style = {styles.container}>
                <Form style = {styles.form}
                    ref={c => this._form = c} 
                    type={User}
                    options={options}
                />
                <Button style = {styles.button}
                    title="Valider"
                   onPress={() => this.props.navigation.navigate('Settings')}
                />
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


export default connect(mapStateToProps)(Forms)