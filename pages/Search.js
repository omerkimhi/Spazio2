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
import DateModal from "../Components/DateModal";

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



    this.setState({
      SpacesToShow: this.props.Spaces,
      Spaces: this.props.Spaces,
      Availablities: this.props.Availablities,
      EquipmentList: this.props.EquipmentList,
      Users: this.props.Users,
      Facilities: this.props.Facilities,
      FieldsEquipment: this.props.FieldsEquipment
    })

  }

  getAddress = (c, s, n) => {

    if (c != "") {
      this.setState({
        hasFiltered: true,
        SpacesToShow: this.state.SpacesToShow.filter(item => item.city == c)
      })
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

  showData = () => {
    console.log(this.state.Users);
    console.log(this.state.Spaces);
    console.log(this.state.EquipmentList);
    console.log(this.state.Facilities);
    console.log(this.state.Availablities);
    console.log(this.state.FieldsEquipment);

  }

  getHour(day) {
    let weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][day];


    return weekday
  }

  whatToShow = () => {
    let day = this.getHour(new Date().getDay());
    console.log("today is: ", today)
    if (this.state.hasFiltered == true) {
      let tempArray = [];
      this.state.SpacesToShow.map((space) => {
        this.state.Availablities.map((ava) => {
          if (ava.spaceId == space.spaceId && ava[day] != "00:00-00:00") {
            tempArray.push(space);
          }
        })
      })
      return tempArray
    }
    else {
      let tempArray = [];
      this.state.Spaces.map((space) => {
        this.state.Availablities.map((ava) => {
          if (ava.spaceId == space.spaceId) {
            tempArray.push(space);
          }
        })
      })
      return tempArray
    }
  }

  LastAddedSpaces = () => {
    let temp = [];
    for (let i = this.props.Spaces.length - 1; i > this.props.Spaces.length - 6; i--) {
      temp.push(this.props.Spaces[i])
    }
    return (temp)
  }


  render() {
    this.getHour();
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
                <DateModal Availablities={this.state.Availablities} />
                {/* <ButtonToolbar>
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
                </ButtonToolbar> */}
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
              <Button onClick={() => { this.props.navigation.navigate('SearchFeed', { SpacesToShow: this.whatToShow(), Availablities: this.state.Availablities }) }} style={{ backgroundColor: "#056b60" }}>
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
