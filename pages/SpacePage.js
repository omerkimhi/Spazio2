import React, { Component } from 'react';

import { View, Text, ScrollView, Image, } from 'react-native';
import Carousel from 'react-native-smart-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FormCheck } from 'react-bootstrap';


import { PilatesStudio } from "../assets/Images/pilates studio.jpg";
import { barbershop } from "../assets/Images/barbershop.jpg";
import { artstudio } from "../assets/Images/artstudio.jpg";

import FieldEq from "../Classes/FieldEq";
import Facility from "../Classes/Facility";


class SpacePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Facilities: [],
            FieldsEquipment: []
        };
    }


    componentDidMount() {
        this.FieldEqApiUrl =
            "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/FieldEq/";
        this.FacilitiesApiUrl =
            "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/Facilities/";

        this.FetchGetFieldsEq();
        this.FetchGetFacilities();
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

    // GetFieldsEq() {
    //     return (
    //         this.state.FieldsEquipment.map((item) => {
    //             { item.field === 'Sport' ? <Text>Hello this is Test Execution </Text> : <Text>Hello else </Text> }
    //         })

    //     )
    // }


    render() {
        const starIcon = require("../assets/Images/starIcon.jpg");
        const starIconPNG = require("../assets/Images/starIconPNG.png");

        const PilatesStudio = require("../assets/Images/pilates studio.jpg");
        const barbershop = require("../assets/Images/barbershop.jpg");
        const artstudio = require("../assets/Images/artstudio.jpg");

        const datacarousel = [
            {
                "id": 1,

                "imagePath": PilatesStudio,
            },
            {
                "id": 2,


                "imagePath": barbershop,
            },
            {
                "id": 3,


                "imagePath": artstudio,
            }
        ];

        return (
            <ScrollView style={{ flexDirection: 'column', backgroundColor: "#fff", flex: 1, marginBottom: "10%" }} ref={(c) => { this.parentScrollView = c; }}>
                <View style={{ height: "60%" }}>
                    <Carousel


                        align={'center'}
                        navigation={true}
                        navigationColor={"#056b60"}
                        parentScrollViewRef={this.parentScrollView}
                        data={datacarousel}
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
                            <Text style={{ fontWeight: '600', fontSize: 15 }}> Max 15 people</Text>
                        </View>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', }}>
                            <Image source={starIconPNG} style={{ marginTop: 1, width: 17, height: 17, alignSelf: 'center' }} />
                            <Text style={{ fontWeight: '600', fontSize: 15 }}> 4.3</Text>
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
                    <Text style={{ fontSize: 22, fontWeight: '600' }}>Equipment</Text>
                    {this.state.FieldsEquipment.map((item) => {
                        return item.field === 'Sport' ? <FormCheck label={item.name} /> : null
                    })}
                </View>



            </ScrollView >
        );
    }
}



export default SpacePage;