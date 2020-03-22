import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import AddSpace from './pages/AddSpace.js';
import AccordionExample from './pages/test.js';

export default function App() {



  return (
    <View style={styles.container}>
       
      <AddSpace/>
      
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
