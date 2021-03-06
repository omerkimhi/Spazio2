import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableHighlight,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import User from "../Classes/User";

import AddSpaceModal from "../Components/AddSpaceModal.js";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      Password: "",
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      Photo: "",
      addedUsers: [],
      spaceName: "",
      spaceOwner: "",
      newSpaceToAdd: null,
      newAvailabilityToAdd: null,
      newFacilityToAdd: null,
      newEquipmentToAdd: null,

  }}

  getSpaceData = (data) => {
    this.setState(
      {
        spaceName: data,
      },
      () => {
        console.log(this.state.spaceName);
      }
    );
  };

  componentDidMount() {
    this.spaceToPostApiUrl =
      "https://proj.ruppin.ac.il/igroup17/Mobile/project/api/spacedata/";
    this.userToPostApiUrl = "https://proj.ruppin.ac.il/igroup17/proj/api/user"; //*** TODO: CHANGE THE API TO THE PROD  ***/

    //console.log(this.state.newFacilityToAdd); ** for testing
    //console.log(this.state.newEquipmentToAdd); ** for testing
  }

  EmailChanged = (event) => {
    this.setState({ Email: event });
  };
  PasswordChanged = (event) => {
    this.setState({ Password: event });
  };
  FirstNameChanged = (event) => {
    this.setState({ FirstName: event });
  };
  LastNameChanged = (event) => {
    this.setState({ LastName: event });
  };
  PhoneNumberChanged = (event) => {
    this.setState({ PhoneNumber: event });
  };

  Fullname = (a, b) => {
    return a + "  " + b;
  };

  addUser = () => {
    var user = {
      Id: "",
      Email: this.state.Email, //this.state.Email,
      Password: this.state.Password, //this.state.Password,
      UserName: this.Fullname(this.state.FirstName, this.state.LastName), //this.Fullname(this.state.FirstName, this.state.LastName),
      PhoneNumber: this.state.PhoneNumber, //this.state.PhoneNumber,
      Photo: "", // this.state.Photo,
      spaceOwner: this.state.spaceOwner, // this.state.SpaceOwner,
      visits: "",
      rank: "",
      RegistrationDate: "",
    };

    //console.log("im user", user.UserName);

    fetch(this.userToPostApiUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",

        //very important to add the 'charset=UTF-8'!!!!
      }),
    })
      .then((res) => {
        console.log("res=", res);
        return res.json();
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
        },
        (error) => {
          console.log("err post=", error);
        }
      );

    this.setState({
      addedUsers: this.state.addedUsers.concat(user),

      // adjustedUsers:this.state.adjustedUsers.filter(m=>m.id!==item.id)
    });
    for (var i = 0; i < this.state.addedUsers.length; i++) {
      console.log(this.state.addedUsers[i]);
    }
  };
  addNewSpace = () => {
    // console.log("the space has been added");

    var tempFacility = {
      Parking: "false",
      Toilet: "false",
      Kitchen: "false",
      Intercom: "false",
      Accessible: "false",
      AirCondition: "false",
      Wifi: "false",
      SpaceId: "",
    };

    this.state.newFacilityToAdd.forEach((element) => {
      let tempstring = element.toString();
      if (tempstring === "Air Conditioning") tempstring = "AirCondition";
      else if (tempstring === "Wi-fi") tempstring = "Wifi";
      else if (tempstring === "intercom") tempstring = "Intercom";

      tempFacility[tempstring] = "true";
    });

    var equipmentList = [];
    this.state.newEquipmentToAdd.forEach((el) => {
      var eq = {
          Id: "",
          Name: el.toString(),
          SpaceId: "",
        };

      equipmentList.push(eq);
    });

    var tempspace2 = {
      AccountNumber: this.state.newSpaceToAdd.accountNumber,
      Bank: this.state.newSpaceToAdd.bank,
      Branch: this.state.newSpaceToAdd.branch,
      Capabillity: this.state.newSpaceToAdd.capabillity,
      City: this.state.newSpaceToAdd.city,
      Description: this.state.newSpaceToAdd.description,
      Field: this.state.newSpaceToAdd.field,
      Imageurl1: "",
      Imageurl2: "",
      Imageurl3: "",
      Imageurl4: "",
      Imageurl5: "",
      Name: this.state.newSpaceToAdd.name,
      Number: this.state.newSpaceToAdd.number,
      Price: this.state.newSpaceToAdd.price,
      Rank: "",
      Street: this.state.newSpaceToAdd.street,
      TermsOfUse: this.state.newSpaceToAdd.termsOfUse,
      Uploadtime: "",
      UserEmail: this.state.Email, 
    };

    var tempavailability = {
      Friday: this.state.newAvailabilityToAdd.friday,
      Monday: this.state.newAvailabilityToAdd.monday,
      Saturday: this.state.newAvailabilityToAdd.saturday,
      Sunday: this.state.newAvailabilityToAdd.sunday,
      Thursday: this.state.newAvailabilityToAdd.thursday,
      Tuesday: this.state.newAvailabilityToAdd.tuesday,
      Wednesday: this.state.newAvailabilityToAdd.wednesday,
    };
     // this is the space for post 
    var newSpaceToPostTest5555 = {
      space: tempspace2,
      facility: tempFacility,
      equipment: equipmentList,
      availability: tempavailability,
    };


    console.log("variable name:newSpaceToPostTest5555")
    console.log(newSpaceToPostTest5555);
    console.log("variable name:this  state newSpaceToAdd")
    console.log(this.state.newSpaceToAdd);


    fetch(this.spaceToPostApiUrl, {
      method: "POST",
      body: JSON.stringify(newSpaceToPostTest5555),
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",

        //very important to add the 'charset=UTF-8'!!!!
      }),
    })
      .then((res) => {
        console.log("res=", res);
        return res.json();
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  };

  getSpacesAdded = (newSpace, Avail, Fac, Eq) => {
    this.setState({
      spaceOwner: true,
      newSpaceToAdd: newSpace,
      newAvailabilityToAdd: Avail,
      newFacilityToAdd: Fac,
      newEquipmentToAdd: Eq,
    });
    // help for testing 
    //console.log("added to register: ", newSpace, Avail, Fac, Eq);
  };

  render() {
    const logow1 = require("../assets/Images/LogoW.png");
    const personI = require("../assets/Images/PersonIcon.png");
    const spaceI = require("../assets/Images/SpaceIcon.png");

    
    if (this.props.fromPersonalArea) {
      return (
        <ScrollView>
          <LinearGradient colors={["#056b60", "white"]} style={{ flex: 1 }}>
            <View style={{ paddingTop: 10 }}>
              <View style={styles.container}>
                <View style={{ paddingLeft: "5%", flexDirection: "row" }}>
                  <View style={{ flexDirection: "column", width: "60%" }}>
                    <Text style={{ color: "white", fontSize: 22 }}>
                      Email adress:
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "400",
                        fontStyle: "italic",
                      }}
                    >
                      {this.props.user.email}
                    </Text>
                    <Text style={{ color: "white", fontSize: 22 }}>
                      Password:
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "400",
                        fontStyle: "italic",
                      }}
                    >
                      {this.props.user.password}
                    </Text>
                    <Text style={{ color: "white", fontSize: 22 }}>
                      Phone number:
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "400",
                        fontStyle: "italic",
                      }}
                    >
                      {this.props.user.phoneNumber}
                    </Text>
                    <Text style={{ color: "white", fontSize: 22 }}>Name:</Text>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "400",
                        fontStyle: "italic",
                      }}
                    >
                      {this.props.user.fullName}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
          <LinearGradient colors={["#056b60", "white"]} style={{ flex: 1 }}>
            <View style={{ paddingTop: 35 }}>
              <View style={styles.container}>
                <View style={{ paddingLeft: "5%", flexDirection: "row" }}>
                  <View style={{ flexDirection: "column", width: "60%" }}>
                    <Text style={{ color: "white", fontSize: 22 }}>
                      Email adress:
                    </Text>
                    <Input
                      onChangeText={this.EmailChanged}
                      placeholder=" email@adress.com"
                      leftIcon={
                        <Icon name="envelope" size={24} color="#595959" />
                      }
                    />
                    <Text style={{ color: "white", fontSize: 22 }}>
                      Password:
                    </Text>
                    <Input
                      onChangeText={this.PasswordChanged}
                      placeholder=" Password"
                      leftIcon={<Icon name="lock" size={24} color="#595959" />}
                    />
                    <Text style={{ color: "white", fontSize: 22 }}>
                      Phone number:
                    </Text>
                    <Input
                      onChangeText={this.PhoneNumberChanged}
                      placeholder=" 05X-XXXX-XXX"
                      leftIcon={<Icon name="phone" size={24} color="#595959" />}
                    />

                    <Text style={{ color: "white", fontSize: 22 }}>
                      First name:
                    </Text>
                    <Input
                      onChangeText={this.FirstNameChanged}
                      placeholder=""
                    />
                    <Text style={{ color: "white", fontSize: 22 }}>
                      Last name:
                    </Text>
                    <Input onChangeText={this.LastNameChanged} />

                    <View style={{ flexDirection: "row", paddingTop: 10 }}>
                      <Icon name="id-card" size={24} color="#595959" />
                      <Text
                        style={{
                          color: "#595959",
                          alignSelf: "center",
                          fontSize: 18,
                          paddingLeft: 2,
                        }}
                      >
                        {" "}
                        Add your ID
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        paddingTop: 2,
                        paddingTop: "5%",
                      }}
                    >
                      <Icon name="credit-card" size={24} color="#595959" />
                      <Text
                        style={{
                          color: "#595959",
                          alignSelf: "center",
                          fontSize: 18,
                          paddingLeft: 2,
                        }}
                      >
                        {" "}
                        Add your credit-card
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "35%",
                      alignItems: "center",
                      marginTop: "10%",
                      paddingLeft: "5%",
                    }}
                  >
                    <Image source={personI} style={{ width: 70, height: 70 }} />
                    <Text
                      style={{
                        color: "#595959",
                        marginBottom: 20,
                        fontSize: 18,
                      }}
                    >
                      Add a photo
                    </Text>

                    <AddSpaceModal
                      FieldsEquipment={this.props.FieldsEquipment}
                      getSpacesAdded={this.getSpacesAdded}
                      sendSpaceData={this.getSpaceData}
                    />
                  </View>

                  <View></View>
                </View>
                <View style={{ paddingTop: 15, height: 30 }}>
                  <Button
                    color="#056b60"
                    title="Register"
                    onPress={() => {
                      this.addUser();
                      this.addNewSpace();
                    }}
                  />
                </View>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      );
    }
  }
}
export default Register;

const styles = StyleSheet.create({
  container: {},
});
