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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
    return (
        <View>
            <Button title="Register" color="#056b60" onPress={() => navigation.navigate('Register')} ></Button>
            
        </View>
    );
}
export default function Test1() {

    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}