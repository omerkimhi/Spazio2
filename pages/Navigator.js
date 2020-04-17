import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Loader from 'react-native-mask-loader';
import Icon from "react-native-vector-icons/FontAwesome";

import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import Home from '../pages/Home.js';
import Register from '../pages/Register.js';
import AddSpace from '../pages/AddSpace.js';
import Test1 from '../pages/Test1.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddSpaceModal from '../Components/AddSpaceModal.js';
import Search from '../pages/Search.js';
import SpaceCard from '../Components/SpaceCard';
import SearchFeed from '../pages/SearchFeed';
import SpacePage from '../pages/SpacePage';
import PersonalArea from '../pages/PersonalArea';
import OrderSpace from '../pages/OrderSpace';
import FavoriteSpaces from '../pages/Personal Area Pages/FavoriteSpaces.js';

//import classes
import User from "../Classes/User";
import Space from "../Classes/Space";
import Equipment from "../Classes/Equipment";
import Facility from "../Classes/Facility";
import Availabillity from "../Classes/Availabillity";
import FieldEq from "../Classes/FieldEq";
import Favourite from "../Classes/Favourite";


const HomeStack = createStackNavigator();

const SearchStack = createStackNavigator();

const PersonalStack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

const DetailsIcon = require("../assets/Images/detailsIcon.jpg");

const spacesIdTest = [6, 7, 8, 10, 11];


class Navigator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Users: [],
      Spaces: [],
      EquipmentList: [],
      Facilities: [],
      Availablities: [],
      FieldsEquipment: [],
      isLogged: false,
      userLogged: null,
      spaceSelected: "",
      FavoriteSpaces: [],
      addedFav: false
    };
    this.FetchGetUsers = this.FetchGetUsers.bind(this);
    this.FetchGetSpaces = this.FetchGetSpaces.bind(this);;

  }

  checkLogged = (isLog, user) => {
    if (isLog) {
      this.setState({
        isLogged: true,
        userLogged: user,

      }, () => { this.getFavouritesSpaces(this.state.userLogged.userId); })
    }
  }


  componentDidMount() {
    this.UsersApiUrl =
      "http://proj.ruppin.ac.il/igroup17/prod/api/User/";
    this.SpacesApiUrl =
      "http://proj.ruppin.ac.il/igroup17/prod/api/space";
    this.EquipmentApiUrl =
      "http://proj.ruppin.ac.il/igroup17/prod/api/Equipment/";
    this.FacilitiesApiUrl =
      "http://proj.ruppin.ac.il/igroup17/prod/api/Facilities/";
    this.AvailabilitiesApiUrl =
      "http://proj.ruppin.ac.il/igroup17/prod/api/Availability/";
    this.FieldEqApiUrl =
      "http://proj.ruppin.ac.il/igroup17/prod/api/FieldEq/";

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
                  item.UserEmail,
                  item.Description,
                  item.TermsOfUse,
                  item.Rank,
                  item.Uploadtime

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

  getFavouritesSpaces = (num) => {

    var favouritesApiUrl = `http://proj.ruppin.ac.il/igroup17/prod/api/favourite/${num}`;

    fetch(favouritesApiUrl, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            FavoriteSpaces: result.map(
              item =>
                item

            )


          }, () => console.log(this.state.FavoriteSpaces));
        },
        error => { }
      );

  };
  spaceSelectedFunc = (spaceselected) => {
    this.setState({
      spaceSelected: spaceselected
    })
  };

  showData = () => {
    console.log(this.state.Users);
    console.log(this.state.Spaces);
    console.log(this.state.EquipmentList);
    console.log(this.state.Facilities);
    console.log(this.state.Availablities);
    console.log(this.state.FieldsEquipment);
  }

  addFavourite = (userId, spaceId) => {
    var favourite = new Favourite(userId, spaceId);
    var apiUrl = "http://proj.ruppin.ac.il/igroup17/prod/api/favourite/";
    this.setState({ addedFav: true }, () => {
      fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(favourite),
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8"

          //very important to add the 'charset=UTF-8'!!!!
        })
      })
        .then(res => {
          console.log("res=", res, res.json());
          return res.json();
        })
        .then(
          result => {
            console.log("fetch POST= ", result);
            this.getFavouritesSpaces(this.state.userLogged.userId);
          },
          error => {
            console.log("err post=", error);
          }
        )
    }
    )
  }

  HomeScreen = ({ navigation }) => {

    return (
      <Home navigation={navigation} Users={this.state.Users} checkLogged={this.checkLogged} />
    );
  }

  PersonalScreen = ({ navigation }) => {

    return (

      <PersonalArea user={this.state.userLogged} navigation={navigation} />
    );
  }

  SearchScreen = ({ navigation }) => {

    return (
      <Search
        Availablities={this.state.Availablities}
        EquipmentList={this.state.EquipmentList}
        Spaces={this.state.Spaces}
        Users={this.state.Users}
        Facilities={this.state.Facilities}
        FieldsEquipment={this.state.FieldsEquipment}
        navigation={navigation} />
    );
  }


  RegisterScreen = () => {
    return (

      <Register FieldsEquipment={this.state.FieldsEquipment} />

    );
  }

  SearchFeedScreen = ({ route, navigation }) => {

    return (

      <SearchFeed spaceSelected={this.spaceSelectedFunc} navigation={navigation} route={route} />

    );
  }

  SpacePageScreen = ({ route, navigation }) => {

    return (

      <SpacePage navigation={navigation} route={route}
        Facilities={this.state.Facilities}
        FieldsEquipment={this.state.FieldsEquipment}
        EquipmentList={this.state.EquipmentList} />

    );
  }

  OrderSpacePageScreen = ({ route, navigation }) => {

    return (

      <OrderSpace userLogged={this.state.userLogged} navigation={navigation} route={route} />

    );
  }

  HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen options={{ headerShown: false }} name="Home" component={this.HomeScreen} />
        <HomeStack.Screen name="Register" options={{ headerStyle: { backgroundColor: '#056b60' } }} component={this.RegisterScreen} />
      </HomeStack.Navigator>
    );
  }

  setSpaceHeader = () => {
    return (<View style={{ alignContent: 'center', flexDirection: 'row' }}>
      <View>
        <Text>{this.state.spaceSelected.name}</Text>
        <Text style={{ fontSize: 13 }}>{this.state.spaceSelected.street} {this.state.spaceSelected.number}, {this.state.spaceSelected.city}</Text>
      </View>

    </View>)
  }

  setSpaceRightHeader = () => {
    return (
      <View style={{ flexDirection: 'row-reverse', }}>
        <TouchableHighlight style={{ marginRight: '20%' }} onPress={() => {
          console.log("User: ", this.state.userLogged.userId, "Space: ", this.state.spaceSelected.spaceId);
          this.addFavourite(this.state.userLogged.userId, this.state.spaceSelected.spaceId);
        }}>
          <View>
            <Icon
              name='heart'
              size={35}
              color='red'
            />
          </View>
        </TouchableHighlight>

      </View>)
  }

  checkFavorites = () => {
    let favSpaces = [];
    this.state.Spaces.map((space) => {
      this.state.FavoriteSpaces.map((num) => {
        if (num == space.spaceId) {
          favSpaces.push(space);
        }
      })
    });
    return (favSpaces);
  }

  FavoritesSpaceslScreen = ({ route, navigation }) => {

    return (
      <FavoriteSpaces Spaces={this.checkFavorites()} navigation={navigation} route={route} />
    )


  }


  SearchStackScreen = () => {

    return (
      <SearchStack.Navigator>
        <SearchStack.Screen options={{ headerShown: false }} name="Search" component={this.SearchScreen} />
        <SearchStack.Screen name="SearchFeed" options={{ headerStyle: { backgroundColor: '#056b60', height: 47, } }} component={this.SearchFeedScreen} />
        <SearchStack.Screen options={{ title: this.setSpaceHeader(), headerRight: () => this.setSpaceRightHeader(), headerStyle: { height: 47, backgroundColor: '#056b60' } }} name="SpacePage" component={this.SpacePageScreen} />
        <SearchStack.Screen options={{ title: this.setSpaceHeader(), headerRight: () => this.setSpaceRightHeader(), headerStyle: { height: 47, backgroundColor: '#056b60' } }} name="OrderPage" component={this.OrderSpacePageScreen} />
      </SearchStack.Navigator>
    );
  }

  PersonalStackScreen = () => {

    return (
      <PersonalStack.Navigator>
        <PersonalStack.Screen options={{ headerShown: false }} name="Personal Area" component={this.PersonalScreen} />
        <PersonalStack.Screen options={{ headerStyle: { backgroundColor: '#056b60' } }} name="Favorites" component={this.FavoritesSpaceslScreen} />

      </PersonalStack.Navigator>
    );

  }



  isLoading = () => {
    return (this.state.Spaces.length == 0
      || this.state.FieldsEquipment.length == 0
      || this.state.Facilities.length == 0
      || this.state.Users.length == 0
      || this.state.Availablities.length == 0
      || this.state.EquipmentList.length == 0)
  }

  render() {
    if (this.isLoading()) {
      return (
        <View style={styles.horizontal}>
          <ActivityIndicator size="large" color="#056b60" />
        </View>
      )
    }


    else {
      if (this.state.isLogged) {
        return (
          <View style={styles.container}>
            <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen name="Search" component={this.SearchStackScreen} />
                <Tab.Screen name="Personal Area" component={this.PersonalStackScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </View >
        )
      }

      return (
        <View style={styles.container}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Search" component={this.SearchStackScreen} />
              <Tab.Screen name="Log in" component={this.HomeStackScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </View >
      )
    }
  };
}
export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


  },
  horizontal: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  }
});
