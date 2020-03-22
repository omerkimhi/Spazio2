import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableHighlight } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Register() {

    const logow1 = require('../assets/Images/LogoW.png');
    const personI = require('../assets/Images/PersonIcon.png');
    const spaceI = require('../assets/Images/SpaceIcon.png');

    return (
        <LinearGradient colors={['#056b60', 'white']} style={{ flex: 1 }} >
            <View style={{ paddingTop: 35 }}>
                <View style={{ alignSelf: 'center', alignItems: 'center', height: '20%', flexDirection: 'row' }}>
                    <Image source={logow1} style={{ width: 50, height: 50 }} />
                    <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }}>SPAZIO</Text>
                </View>

                <View style={styles.container}>

                    <View style={{ paddingLeft: '5%', flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', width: '60%' }}>
                            <Text style={{ color: 'white', fontSize: 22 }}>Email adress:</Text>
                            <Input placeholder=" emailllllll@adress.com"
                                leftIcon={
                                    <Icon
                                        name='envelope'
                                        size={24}
                                        color='#595959'
                                    />
                                } />
                            <Text style={{ color: 'white', fontSize: 22 }}>Password:</Text>
                            <Input placeholder=" Password"
                                leftIcon={
                                    <Icon
                                        name='lock'
                                        size={24}
                                        color='#595959'
                                    />
                                } />
                            <Text style={{ color: 'white', fontSize: 22 }}>Phone number:</Text>
                            <Input placeholder=" 05X-XXXX-XXX"
                                leftIcon={
                                    <Icon
                                        name='phone'
                                        size={24}
                                        color='#595959'
                                    />
                                } />

                            <Text style={{ color: 'white', fontSize: 22 }}>First name:</Text>
                            <Input placeholder="" />
                            <Text style={{ color: 'white', fontSize: 22 }}>Last name:</Text>
                            <Input />


                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <Icon
                                    name='id-card'
                                    size={24}
                                    color='#595959'
                                />
                                <Text style={{ color: '#595959', alignSelf: 'center', fontSize: 18, paddingLeft: 2 }}> Add your ID</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingTop: 2, paddingTop: '5%' }}>
                                <Icon
                                    name='credit-card'
                                    size={24}
                                    color='#595959'
                                />
                                <Text style={{ color: '#595959', alignSelf: 'center', fontSize: 18, paddingLeft: 2 }}> Add your credit-card</Text>
                            </View>

                        </View>
                        <View style={{ width: '35%', alignItems: 'center', marginTop: '10%', paddingLeft: '5%' }}>
                            <Image source={personI} style={{ width: 70, height: 70 }} />
                            <Text style={{ color: '#595959', marginBottom: 20, fontSize: 18 }}>Add a photo</Text>
                            <Image source={spaceI} style={{ width: 70, height: 70 }} />
                            <Text style={{ color: '#595959', fontSize: 18 }}>Add a space</Text>
                        </View>

                        <View>

                        </View>

                    </View>
                    <View style={{paddingTop:15, height:30}}>
                        <Button color='#056b60' title='Register' />
                    </View>

                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {



    },
});