import React, { Component, useState } from "react";
import {
  Picker,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight
} from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Modal,
  Carousel,
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
  DropdownButton,
  Dropdown,
  ButtonGroup,
  Button,
  Accordion,
  Card,
  AccordionToggle
} from "react-bootstrap";
import Address from "../Components/Address";
import SpacesCarousel from "../Components/SpacesCarousel.js";
import AddressModal from "../Components/AddressModal.js";

//import classes
import User from "../Classes/User";
import Space from "../Classes/Space";
import Equipment from "../Classes/Equipment";
import Facility from "../Classes/Facility";
import Availabillity from "../Classes/Availabillity";
import FieldEq from "../Classes/FieldEq";




class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      field: "",
      Users: [],
      Spaces: [],
      EquipmentList: [],
      Facilities: [],
      Availablities: [],
      FieldsEquipment: [],
      AddressCity: "",
      addressStreet: "",
      addressNumber: "",
      SpacesToShow: [],
      hasFiltered: false
    };
    this.updateFieldB = this.updateFieldB.bind(this);
    this.updateFieldS = this.updateFieldS.bind(this);
    this.updateFieldA = this.updateFieldA.bind(this);
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
    this.setState({
      SpacesToShow: this.props.Spaces
    })

  }

  getAddress = (c, s, n) => {

    if (c != "") {
      this.setState({
        hasFiltered: true,
        SpacesToShow: this.state.SpacesToShow.filter(item => item.city == c)
      })

      // if (this.state.hasFiltered == true) {
      //   this.setState({
      //     hasFiltered: true,
      //     SpacesToShow: this.state.SpacesToShow.filter(function (item) {
      //       return item.city == c
      //     }, () => (console.log(this.state.SpacesToShow)))
      //   })
      // }
      // else {
      //   this.setState({
      //     hasFiltered: true,
      //     SpacesToShow: this.props.Spaces.filter(function (item) {
      //       return item.city == c
      //     }, () => (console.log(this.state.SpacesToShow)))
      //   })
      // }
    }
    if (n != "") {
      this.setState({
        hasFiltered: true,
        SpacesToShow: this.state.SpacesToShow.filter(item => item.number == n)
      })
    }
    if (s != "") {
      this.setState({
        hasFiltered: true,
        SpacesToShow: this.state.SpacesToShow.filter(item => item.street == s)
      })
    }


  }

  serachFilter = (field) => {
    console.log(this.state.SpacesToShow)
    this.setState({
      hasFiltered: true,
      SpacesToShow: this.state.SpacesToShow.filter(item => item.field == field)
    }, () => console.log(this.state.SpacesToShow))

  }

  updateFieldB() {
    this.setState({ field: 'Beauty', }, this.serachFilter("Beauty"));
  }

  updateFieldS() {
    this.setState({ field: 'Sport' }, this.serachFilter("Sport"));
  }

  updateFieldA() {
    this.setState({ field: 'Art' }, this.serachFilter("Art"));
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
                  item.Photo,
                  item.SpaceOwner,
                  item.Visits,
                  item.Rank

                )
            )
          });
        },
        error => { }
      );
  };
  FetchGetSpaces = () => {
    this.setState({
      Spaces: this.props.Spaces
    })
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

  whatToShow = () => {
    if (this.state.hasFiltered == true) {
      return this.state.SpacesToShow
    } else return this.state.Spaces
  }

  LastAddedSpaces = () => {
    let temp = [];
    for (let i = this.props.Spaces.length - 1; i > this.props.Spaces.length - 6; i--) {
      temp.push(this.props.Spaces[i])
    }
    return (temp)
  }


  render() {
    this.LastAddedSpaces();
    let weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][new Date().getDay()]

    return (
      <ScrollView style={{ flex: 1 }} >
        <View style={{ paddingTop: 20, backgroundColor: "#fff" }}>


          <View style={{ alignItems: "center", paddingBottom: 25 }}>
            <View style={{}}>
              <Text
                style={{
                  color: "#056b60",
                  fontSize: 25,
                  paddingBottom: 2,
                  alignSelf: "center"
                }}
              >
                Field{" "}
              </Text>

              <ButtonToolbar>
                <ToggleButtonGroup
                  type="radio"
                  aria-label="Basic example"
                  name="options"
                >
                  <ToggleButton variant="outline-secondary" value={1} onClick={this.updateFieldB}>
                    Beauty
                  </ToggleButton>
                  <ToggleButton variant="outline-secondary" value={2} onClick={this.updateFieldS}>
                    Sport
                  </ToggleButton>
                  <ToggleButton variant="outline-secondary" value={3} onClick={this.updateFieldA}>
                    Art
                  </ToggleButton>
                </ToggleButtonGroup>
              </ButtonToolbar>
            </View>
            <View style={{ paddingBottom: 15 }}>
              <View style={{}}>
                <Text
                  style={{
                    color: "#056b60",
                    fontSize: 25,
                    paddingBottom: 2,
                    alignSelf: "center"
                  }}
                >
                  Location{" "}
                </Text>

                <AddressModal getAddress={this.getAddress} />

              </View>

              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    color: "#056b60",
                    fontSize: 25,
                    paddingBottom: 2,
                    alignSelf: "center"
                  }}
                >
                  Time{" "}
                </Text>

                <ButtonToolbar>
                  <ToggleButtonGroup
                    type="radio"
                    aria-label="Basic example"
                    name="options"
                    defaultValue={1}
                  >
                    <ToggleButton variant="outline-secondary" value={1}>
                      Today
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" value={2}>
                      By Date
                    </ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </View>
            </View>

            {/* <select value={optionsState} style={{width:80, color: '#056b60', borderColor:'#056b60'}}>
                        <option value="A">Beauty</option>
                        <option value="B">Sport</option>
                        <option value="C">Art</option>
                    </select> */}

            {/* <Input
                    inputContainerStyle={{color:'#056b60', borderColor:'#056b60', borderWidth:2, borderRadius:10}}
                    placeholder="Example: Sport"/> */}
            <View>
              <Button onClick={this.showData} style={{ backgroundColor: "#056b60" }}>
                Show data
              </Button>
              <Button onClick={() => { this.props.navigation.navigate('SearchFeed', { SpacesToShow: this.whatToShow() }) }} style={{ backgroundColor: "#056b60" }}>
                Search
              </Button>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#d9d9d9",
              paddingVertical: 10,
              justifyContent: "center"
            }}
          >
            <Text style={{ fontSize: 17, color: "#056b60", fontWeight: "600" }}>
              {this.state.Spaces.length}{" "}
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "400" }}>
              Spaces registered{" "}
            </Text>
            <Text style={{ fontSize: 17, color: "#056b60", fontWeight: "600" }}>
              {this.state.Users.length}{" "}
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "400" }}>
              Users registered
            </Text>
          </View>

          <View style={{ paddingTop: 15, alignItems: "center" }}>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "#056b60" }}>
              {" "}
              Last added spaces
            </Text>
            <View style={{ paddingBottom: 10 }}>
              <SpacesCarousel navigation={this.props.navigation} Spaces={this.LastAddedSpaces()} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}


export default SearchPage;
