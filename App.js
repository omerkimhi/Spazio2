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
import Test1 from './pages/Test1.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddSpaceModal from './Components/AddSpaceModal.js';
import Search from './pages/Search.js';
import SpaceCard from './Components/SpaceCard';
import Navigator from './pages/Navigator';

function HomeScreen({ navigation }) {
  return (
    <Home navigation={navigation} />
  );
}

function SearchScreen({ navigation }) {
  return (
    <Search navigation={navigation} />
  );
}


function RegisterScreen() {
  return (

    <Register />

  );
}

function SearchFeedScreen() {

  return (

    <SearchFeed />

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

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen options={{ headerShown: false }} name="Search" component={SearchScreen} />
      <SearchStack.Screen name="SearchFeed" options={{ headerStyle: { backgroundColor: '#056b60' } }} component={SearchFeedScreen} />
    </SearchStack.Navigator>
  );
}


const Tab = createMaterialTopTabNavigator();

class App extends Component {
constructor(props) {
    super(props);

    this.state = {
     
    };
  }

  render() {

  return (
    <Navigator></Navigator>
  )};
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


  },
});
