import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import AddSpace from './pages/AddSpace.js';
import Test1 from './pages/Test1.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddSpaceModal from './Components/AddSpaceModal.js'

export default function App() {



  return (
    <View style={styles.container}>
       
      <Register/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
    justifyContent: 'center',
  },
});
