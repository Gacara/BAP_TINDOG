import React from 'react';
import {StyleSheet, Text, View, Image, Button, TextInput, Alert, TouchableOpacity, ScrollView} from 'react-native'




export default class CreateAccount extends React.Component {

    _onPressButton() {

    }

    _onChangeColor() {

    }

    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.state = { race: '' };
        this.state = { date: '' };
        this.state = { vaccination: '' };
    }



    render() {
        return (
            <View style={styles.container}>

                <ScrollView>

                <Image style={styles.logo}
                    source={require('../img/dernierlogo2.png')}
                />

                <Text style={styles.title}>
                    Créer mon compte
                </Text>

                <View style={styles.dog_picture_Up}>
                    <View style={styles.dog_pictures}></View>
                    <View style={styles.dog_pictures}></View>
                    <View style={styles.dog_pictures}></View>
                    <View style={styles.dog_pictures}></View>
                </View>
                <View style={styles.dog_picture_Down}>
                    <View style={styles.dog_pictures}></View>
                    <View style={styles.dog_pictures}></View>
                    <View style={styles.dog_pictures}></View>
                    <View style={styles.dog_pictures}>
                        <Image style={styles.add}
                               source={require('../img/add_big.png')}
                        />
                    </View>
                </View>

                <View style={styles.description}>
                    <Text style={styles.description_title}>Description</Text>
                    <Text style={styles.description_content}>Ici une description de votre chien...</Text>
                </View>

                <View style={styles.name}>
                    <Text style={styles.name_title}>Prénom :</Text>
                    <TextInput
                        style={styles.inputName}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                </View>

                <View style={styles.espece}>
                    <Text style={styles.espece_title}>Race :</Text>
                    <TextInput
                        style={styles.inputName}
                        onChangeText={(race) => this.setState({race})}
                        value={this.state.race}
                    />
                </View>

                <View style={styles.sexe}>
                    <Text style={styles.sexe_title}>Sexe :</Text>
                    <View style={{flexDirection: 'row',}}>
                        <TouchableOpacity onPress={this._onChangeColor}>
                            <View style = {{alignItems: 'center',
                            justifyContent: 'center', borderRadius: 15, width: 100, height: 30, borderWidth: 1, borderColor: 'orange', marginRight: 20,}}>
                            <Text style = {{color: 'grey', fontSize: 20,}}>Mâle</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._onPressButton}>
                            <View style = {{alignItems: 'center',
                                justifyContent: 'center', borderRadius: 15, width: 100, height: 30, borderWidth: 1, borderColor: 'orange'}}>
                                <Text style = {{color: 'grey', fontSize: 20,}}>Femelle</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


                    <View style={styles.interets}>
                        <Text style={styles.interets_title}>Intérêts</Text>
                        <View style={{flexDirection: 'row',}}>
                            <TouchableOpacity onPress={this._onPressButton}>
                                <View style = {{alignItems: 'center',
                                    justifyContent: 'center', borderRadius: 15, width: 100, height: 30, borderWidth: 1, borderColor: 'orange', marginRight: 18,}}>
                                    <Text style = {{color: 'grey', fontSize: 20,}}>Jouer</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this._onPressButton}>
                                <View style = {{alignItems: 'center',
                                    justifyContent: 'center', borderRadius: 15, width: 100, height: 30, borderWidth: 1, borderColor: 'orange', marginRight: 18,}}>
                                    <Text style = {{color: 'grey', fontSize: 20,}}>Balade</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this._onPressButton}>
                                <View style = {{alignItems: 'center',
                                    justifyContent: 'center', borderRadius: 15, width: 100, height: 30, borderWidth: 1, borderColor: 'orange'}}>
                                    <Text style = {{color: 'grey', fontSize: 20,}}>Dormir</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                        <View style={{flexDirection: 'row', marginTop: 5}}>
                            <TouchableOpacity onPress={this._onPressButton}>
                                <View style = {{alignItems: 'center',
                                    justifyContent: 'center', borderRadius: 15, width: 100, height: 30, borderWidth: 1, borderColor: 'orange', marginRight: 18,}}>
                                    <Text style = {{color: 'grey', fontSize: 20,}}>Manger</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this._onPressButton}>
                                <View style = {{alignItems: 'center',
                                    justifyContent: 'center', borderRadius: 15, width: 100, height: 30, borderWidth: 1, borderColor: 'orange', marginRight: 18,}}>
                                    <Text style = {{color: 'grey', fontSize: 20,}}>Câliner</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this._onPressButton}>
                                <View style = {{alignItems: 'center',
                                    justifyContent: 'center', borderRadius: 15, width: 100, height: 30, borderWidth: 1, borderColor: 'orange'}}>
                                    <Text style = {{color: 'grey', fontSize: 20,}}>Laver</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.Objectifs}>
                        <Text style={styles.Objectif_title}>Objectif(s) : </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'spaceBetween', marginTop: 5,}}>
                            <TouchableOpacity onPress={this._onChangeColor}>
                                <View style = {{alignItems: 'center',
                                    justifyContent: 'center', borderRadius: 15, width: 170, height: 30, borderWidth: 1, borderColor: 'orange', marginRight: 10,}}>
                                    <Text style = {{color: 'grey', fontSize: 20,}}>Reproduction</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this._onPressButton}>
                                <View style = {{alignItems: 'center',
                                    justifyContent: 'center', borderRadius: 15, width: 170, height: 30, borderWidth: 1, borderColor: 'orange'}}>
                                    <Text style = {{color: 'grey', fontSize: 20,}}>Compagnon de jeu</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.datedenaissance}>
                        <Text style={styles.datedenaissanceText}>Date de naissance :</Text>
                        <TextInput
                            style={styles.inputDate}
                            onChangeText={(date) => this.setState({date})}
                            value={this.state.date}
                            placeholder= "XX / XX / XXXX"
                        />

                    </View>

                    <View style={styles.dernierevaccination}>
                        <Text style={styles.dernierevaccinationText}>Dernière vaccination :</Text>
                        <TextInput
                            style={styles.inputDate}
                            onChangeText={(vaccination) => this.setState({vaccination})}
                            value={this.state.vaccination}
                            placeholder= "XX / XX / XXXX"
                        />

                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        marginTop: 35,
        marginLeft: 8,
        marginRight: 8,
        flex: 1,
    },

    logo: {
        width: 65,
        height: 65,
        alignSelf: 'center',
    },

    title: {
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 20,
        fontSize: 20,
    },

    dog_picture_Up: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    dog_picture_Down: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
    },

    dog_pictures: {
        height: 80,
        width: 80,
        borderWidth: 1.5,
        borderColor: 'orange',
        borderRadius: 15,
    },

    add: {
        width: 55,
        height: 55,
        display: 'flex',
        marginTop: 10,
        alignSelf: 'center'
    },

    description: {
        marginTop: 25,
        marginLeft: 5,
    },

    description_title: {
        fontSize: 20,
    },

    description_content: {
        marginTop: 5,
    },

    name: {
        marginTop: 20,
        marginLeft: 5,
    },

    name_title: {
        fontSize: 20,
    },

    inputName: {
        borderWidth: 1.5,
        borderRadius: 20,
        height: 35,
        borderColor: 'orange',
        width: 150,
        marginTop: 2,
    },

    inputDate: {
        borderWidth: 1,
        borderRadius: 20,
        height: 35,
        borderColor: 'orange',
        width: 150,
        marginTop: 2,
    },

    espece: {
        marginLeft: 5,
        marginTop: 15,
    },

    espece_title: {
        fontSize: 20,
    },

    sexe: {
        marginTop: 15,
        marginLeft: 5,
    },

    sexe_title: {
        fontSize: 20,
    },

    buttonsEspece: {
        borderWidth: 1,
        borderColor: 'orange',
    },

    interets: {
        marginTop: 20,
        marginLeft: 5,
    },

    interets_title: {
        fontSize: 20,
        marginBottom: 5,
    },

    Objectifs: {
        marginTop: 20,
        marginLeft: 5,
    },

    Objectif_title: {
        fontSize: 20,
    },

    datedenaissance: {
        marginTop: 20,
        marginLeft: 5,
    },

    datedenaissanceText: {
        fontSize: 20,
    },

    dernierevaccination: {
        marginTop: 20,
        marginLeft: 5,
    },

    dernierevaccinationText: {
        fontSize: 20,
    },

});