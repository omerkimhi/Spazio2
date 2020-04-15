import React, { Component } from 'react';

import { View, Text, ScrollView, Image, Picker } from 'react-native';
import Carousel from 'react-native-smart-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FormCheck, Button } from 'react-bootstrap';

import DateSelector from '../Components/DateSelector';
import CalendarPicker from 'react-native-calendar-picker';

import { PilatesStudio } from "../assets/Images/pilates studio.jpg";
import { barbershop } from "../assets/Images/barbershop.jpg";
import { artstudio } from "../assets/Images/artstudio.jpg";

import Space from "../Classes/Space";
import FieldEq from "../Classes/FieldEq";
import Facility from "../Classes/Facility";
import Equipment from "../Classes/Equipment";



class SpacePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Facilities: [],
            FieldsEquipment: [],
            EquipmentList: [],

            availa: [],
            spaceSelected: "",

        };

    }


    componentDidMount() {
        this.FieldEqApiUrl =
            "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/FieldEq/";
        this.FacilitiesApiUrl =
            "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/Facilities/";
        this.EquipmentApiUrl =
            "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/Equipment/";

        this.FetchGetFieldsEq();
        this.FetchGetFacilities();
        this.FetchGetEquipment();

        const { Space, Availablities } = this.props.route.params;
        this.setState({
            spaceSelected: Space,
            availa: Availablities
        }, () => { console.log(this.state.availa) })


    }

    showAvailability = () => {
        return (
            this.state.availa.map((item, key) => <Text style={{ textTransform: 'capitalize' }}>{item.Day}: {item.val}</Text>)
        )
    }

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

    // GetFieldsEq() {
    //     return (
    //         this.state.FieldsEquipment.map((item) => {
    //             { item.field === 'Sport' ? <Text>Hello this is Test Execution </Text> : <Text>Hello else </Text> }
    //         })

    //     )
    // }




    render() {


        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        const starIcon = require("../assets/Images/starIcon.jpg");
        const starIconPNG = require("../assets/Images/starIconPNG.png");

        let pics = [];
        let i;
        for (i = 1; i < 6; i++) {
            if (this.state.spaceSelected["image" + i] != "")
                pics.push({ "id": i, "imagePath": this.state.spaceSelected["image" + i] });
        }
        console.log(this.state.spaceSelected);
        console.log(pics);



        return (
            <View style={{ flex: 1, }}>
                <ScrollView style={{ flexDirection: 'column', backgroundColor: "#fff", marginBottom: "10%" }} ref={(c) => { this.parentScrollView = c; }}>

                    <View style={{ height: 200 }}>
                        <Carousel


                            align={'center'}
                            navigation={true}
                            navigationColor={"#056b60"}
                            parentScrollViewRef={this.parentScrollView}
                            data={pics}
                        />

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%", paddingTop: "1%", paddingBottom: '1%', paddingHorizontal: '5%', borderBottomColor: "#d9d9d9", borderBottomWidth: 1 }}>
                        <View>
                            <View style={{ flexDirection: 'row', }}>
                                <Icon style={{ marginTop: 2 }}
                                    size={15} color="#056b60"
                                    name='check-square' />
                                <Text style={{ fontWeight: '600', fontSize: 15 }}>  Verified space</Text>
                            </View>

                            <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                                <Icon style={{ marginTop: 2 }}
                                    size={15} color="#056b60"
                                    name='handshake-o' />
                                <Text style={{ fontWeight: '600', fontSize: 15 }}> Immediate confirmation</Text>
                            </View>

                            <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                                <Icon style={{ marginTop: 2 }}
                                    size={15} color="#056b60"
                                    name='users' />
                                <Text style={{ fontWeight: '600', fontSize: 15 }}> Max {this.state.spaceSelected.capabillity} people</Text>
                            </View>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', }}>
                                <Image source={starIconPNG} style={{ marginTop: 1, width: 17, height: 17, alignSelf: 'center' }} />
                                <Text style={{ fontWeight: '600', fontSize: 15 }}> 4.2</Text>
                            </View>

                            <View style={{ flexDirection: 'row', paddingTop: '7%' }}>
                                <Icon style={{ marginTop: 2 }}
                                    size={15} color="#056b60"
                                    name='map-marker' />
                                <Text style={{ fontWeight: '600', fontSize: 15 }}> Show on map</Text>
                            </View>

                            <View style={{ flexDirection: 'row', paddingTop: '7%' }}>
                                <Icon style={{ marginTop: 2 }}
                                    size={15} color="#056b60"
                                    name='calendar-check-o' />
                                <Text style={{ fontWeight: '600', fontSize: 15 }}> Self check in</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{ paddingTop: "2%", paddingBottom: '1%', paddingHorizontal: '4%', borderBottomColor: "#d9d9d9", borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 22, fontWeight: '600' }}>Description</Text>
                        <Text style={{ paddingTop: "1%", fontSize: 15, fontWeight: '400', paddingLeft: '2%' }}>In zaki's Pilates studio everybody feels at home. You're invited to rent our comfortable space and...</Text>
                    </View>

                    <View style={{ paddingTop: "2%", paddingBottom: '1%', paddingHorizontal: '4%', borderBottomColor: "#d9d9d9", borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 22, fontWeight: '600' }}>Availability</Text>
                        <View style={{ paddingLeft: '2%' }}>
                            {/* {Availability.map((ava) =>
                                <Text style={{ paddingTop: "1%" }}>{ava.day}: {ava.from}:00-{ava.to}:00</Text>
                            )} */}
                            {this.showAvailability()}
                        </View>
                    </View>

                    <View style={{ paddingTop: "2%", paddingBottom: '1%', paddingHorizontal: '4%', borderBottomColor: "#d9d9d9", borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 22, fontWeight: '600' }}>Equipment</Text>
                        {this.state.EquipmentList.map((item) => {
                            return (item.spaceId === 7) ? (<View style={{ flexDirection: 'row', paddingTop: '1%' }}>
                                <Icon style={{ marginTop: 2 }}
                                    size={15} color="#056b60"
                                    name='check-circle-o' />
                                <Text> {item.name}</Text>
                            </View>) : null
                        })}
                    </View>
                    <View style={{ paddingTop: "2%", paddingBottom: '1%', paddingHorizontal: '4%', borderBottomColor: "#d9d9d9", borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 22, fontWeight: '600' }}>Facilities</Text>


                        {/* {console.log(this.state.Facilities)}

                    {this.state.Facilities.map((item, value) => {
                        return !(item.parking) ? (

                            <View style={{ flexDirection: 'row', paddingTop: '1%' }}>
                                <Icon style={{ marginTop: 2 }}
                                    size={15} color="#056b60"
                                    name='check-circle-o' />
                                <Text> sdf</Text>
                            </View>) : null
                    })} */}


                    </View>

                    <View style={{ paddingTop: "2%", paddingBottom: '1%', paddingHorizontal: '4%', borderBottomColor: "#d9d9d9", borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 22, fontWeight: '600' }}>Space's terms & rules</Text>
                        <Text style={{ paddingTop: "1%", fontSize: 15, fontWeight: '400', paddingLeft: '2%' }}>Here will be the terms and rules</Text>
                        <FormCheck label="I've read and accept the terms and rules" />
                    </View>

                </ScrollView >
                <View style={{ position: 'absolute', width: '100%', bottom: 0, height: '12%' }}>
                    <Button onClick={() => { this.props.navigation.navigate('OrderPage', { Space: this.state.spaceSelected, Availablity: this.state.availa }) }} style={{ height: '100%', paddingBottom: 0, backgroundColor: "red" }}>
                        ORDER      THIS      SPACE      NOW!
              </Button>
                </View>
            </View>
        );
    }
}



export default SpacePage;