import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Home from '../pages/Home.js';
import Register from '../pages/Register.js';
import AddSpace from '../pages/AddSpace.js';
import Test1 from '../pages/Test1.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddSpaceModal from '../Components/AddSpaceModal.js';
import Search from '../pages/Search.js';
import SpaceCard from '../Components/SpaceCard';
import SearchFeed from '../pages/SearchFeed';

//import classes
import User from "../Classes/User";
import Space from "../Classes/Space";
import Equipment from "../Classes/Equipment";
import Facility from "../Classes/Facility";
import Availabillity from "../Classes/Availabillity";
import FieldEq from "../Classes/FieldEq";

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
          Users: [],
          Spaces: [],
          EquipmentList: [],
          Facilities: [],
          Availablities: [],
          FieldsEquipment: []
        };
      }
    
      componentDidMount() {
        this.UsersApiUrl =
          "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/User/";
        this.SpacesApiUrl =
          "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/Space/";
        this.EquipmentApiUrl =
          "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/Equipment/";
        this.FacilitiesApiUrl =
          "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/Facilities/";
        this.AvailabilitiesApiUrl =
          "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/Availability/";
        this.FieldEqApiUrl =
          "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/FieldEq/";
    
        this.FetchGetUsers();
        this.FetchGetSpaces();
        this.FetchGetEquipment();
        this.FetchGetFacilities();
        this.FetchGetAvailabilities();
        this.FetchGetFieldsEq();
    
      }
    
      FetchGetUsers = () => {
        fetch(this.UsersApiUrl, {
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
                      item.Id,
                      item.Email,
                      item.Password,
                      item.UserName,
                      item.PhoneNumber,
                      item.Photo
                    )
                )
              });
            },
            error => { }
          );
      };
      FetchGetSpaces = () => {
        fetch(this.SpacesApiUrl, {
          method: "GET"
        })
          .then(res => {
            return res.json();
          })
          .then(
            result => {
              this.setState({
                Spaces: result.map(
                  item =>
                    new Space(
                      item.Id,
                      item.Name,
                      item.Field,
                      item.Price,
                      item.City,
                      item.Street,
                      item.Number,
                      item.Capabillity,
                      item.Bank,
                      item.Branch,
                      item.Imageurl1,
                      item.Imageurl2,
                      item.Imageurl3,
                      item.Imageurl4,
                      item.Imageurl5,
                      item.AccountNumber,
                      item.UserEmail
                    )
                )
              });
            },
            error => { }
          );
      };
      FetchGetEquipment = () => {
        fetch(this.EquipmentApiUrl, {
          method: "GET"
        })
          .then(res => {
            return res.json();
          })
          .then(
            result => {
              this.setState({
                EquipmentList: result.map(
                  item => new Equipment(item.Id, item.Name, item.SpaceId)
                )
              });
            },
            error => { }
          );
      };
      FetchGetFacilities = () => {
        fetch(this.FacilitiesApiUrl, {
          method: "GET"
        })
          .then(res => {
            return res.json();
          })
          .then(
            result => {
              this.setState({
                Facilities: result.map(
                  item =>
                    new Facility(
                      item.FacilityId,
                      item.Parking,
                      item.Toilet,
                      item.Kitchen,
                      item.Intercom,
                      item.Accessible,
                      item.AirCondition,
                      item.Wifi,
                      item.SpaceId
                    )
                )
              });
            },
            error => { }
          );
      };
      FetchGetAvailabilities = () => {
        fetch(this.AvailabilitiesApiUrl, {
          method: "GET"
        })
          .then(res => {
            return res.json();
          })
          .then(
            result => {
              this.setState({
                Availablities: result.map(
                  item =>
                    new Availabillity(
                      item.Id,
                      item.Sunday,
                      item.Monday,
                      item.Tuesday,
                      item.Wednesday,
                      item.Thursday,
                      item.Friday,
                      item.Saturday,
                      item.SpaceId
                    )
                )
              });
            },
            error => { }
          );
      };
      FetchGetFieldsEq = () => {
        fetch(this.FieldEqApiUrl, {
          method: "GET"
        })
          .then(res => {
            return res.json();
          })
          .then(
            result => {
              this.setState({
                FieldsEquipment: result.map(
                  item => new FieldEq(item.Id, item.Field, item.Name)
                )
              });
            },
            error => { }
          );
      };
      showData = () => {
        console.log(this.state.Users);
        console.log(this.state.Spaces);
        console.log(this.state.EquipmentList);
        console.log(this.state.Facilities);
        console.log(this.state.Availablities);
        console.log(this.state.FieldsEquipment);
      }
  render() {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Search" component={SearchStackScreen} />
          <Tab.Screen name="Log in" component={HomeStackScreen} />


        </Tab.Navigator>




      </NavigationContainer>


    </View >
  )};
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


  },
});
