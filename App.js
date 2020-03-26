import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import AddSpace from './pages/AddSpace.js';
import Test1 from './pages/Test1.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddSpaceModal from './Components/AddSpaceModal.js'
import Search from './pages/Search.js'


function HomeScreen({ navigation }) {
  return (
    <Home navigation={navigation} />
  );
}

function SearchScreen({ navigation }) {
  return (
    <Search />
  );
}


function RegisterScreen() {
  return (

    <Register />

  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Register" options={{ headerStyle: { backgroundColor: '#056b60' } }} component={RegisterScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();


export default function App() {



  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Log in" component={HomeStackScreen} />


        </Tab.Navigator>
        {/* <Register/> */}



      </NavigationContainer>


    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


  },
});
