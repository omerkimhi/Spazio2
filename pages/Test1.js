import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableHighlight
} from "react-native";
import { Button } from 'react-bootstrap';



function RegisterScreen() {
    return (
        <Register />
    );
}
const Stack = createStackNavigator();

export default function Test1() {


    return (
        
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}