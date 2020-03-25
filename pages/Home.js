import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableHighlight
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import User from '../Classes/User';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Test1 from './Test1.js';
import Register from "./Register";



class Home extends Component {

  FetchGetUsers = () => {
    fetch(this.apiUrl, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            Users: result.map(
              item =>
                new User(
                  item.Email,
                  item.Password,
                  item.UserName,
                  item.PhoneNumber,
                )
            )
          });
        },
        error => { }
      );
  };

  componentDidMount() {
    this.apiUrl = "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/spazioUser/";
    this.FetchGetUsers();
  }

  constructor(props) {
    super(props);

    this.state = {
      Users: [],
      Email: "",
      Password: ""
    };
  }

  EmailChanged = (event) => {
    this.setState({ Email: event })
  }
  PasswordChanged = (event) => {
    this.setState({ Password: event })
  }

  checkUser = () => {
    let tempArr = this.state.Users;
    console.log(this.state.Users);
    console.log(this.state.Email);
    console.log(this.state.Password);

    let userExsists = false;

    for (var i = 0; i < this.state.Users.length; i++) {

      if (this.state.Email == this.state.Users[i].email) {
        console.log(this.state.Email);
        console.log(this.state.Users[i].name);
        userExsists = true;
        if (this.state.Password == this.state.Users[i].password) {
          console.log("You Are logged in");
          alert("You Are logged in");
        }
        else {
          console.log("The password is incorrect")
          alert("The password is incorrect");
        }
      }
    }
    if (userExsists == false)
      console.log("Invalid user")
  }


  

  render() {
    const Stack = createStackNavigator();

    const logow = require("../assets/Images/LogoW.png");

    return (
      <LinearGradient colors={["#056b60", "white"]} style={{ flex: 1 }}>
        
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 38
            }}
          >
            <Image source={logow} style={{ width: 100, height: 100 }} />
            <View style={{ flexDirection: "column" }}>
              <Text style={{ color: "white", fontSize: 18 }}>

              </Text>
              <Text style={{ color: "white", fontSize: 40 }}>SPAZIO</Text>
              <Text style={{ color: "white", fontSize: 18 }}>Workin' Spaces</Text>
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <View style={{ marginLeft: 3 }}>
              <Text style={{ color: "white" }}>Email adress:</Text>
              <TextInput onChangeText={this.EmailChanged}
                style={{
                  height: 20,
                  width: "90%",
                  borderColor: "#fff",
                  borderBottomWidth: 1,
                  marginBottom: 10
                }}
              />
              <Text style={{ color: "white" }}>Password:</Text>
              <TextInput secureTextEntry={true} onChangeText={this.PasswordChanged}
                style={{
                  height: 20,
                  width: "90%",
                  borderColor: "#fff",
                  borderBottomWidth: 1,
                  marginBottom: 10
                }}
              />
            </View>

            <View style={{ flexDirection: "column", marginHorizontal: 3 }}>
              <View
                style={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <View>
                  
                    
                 
                  <Button title="Register"  color="#056b60" onPress={() => {this.props.navigation.navigate('Register')}}></Button> 


                </View>
                <View>
                  <Button title="Log In" color="#056b60" onPress={this.checkUser}></Button>
                </View>
              </View>
              <View style={{ marginTop: 5 }}>
                <Button title="Continue with FaceBook" color="#3b5998"></Button>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:60,

    
  }
});
