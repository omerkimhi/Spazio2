import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableHighlight } from 'react-native';

import Carousel from 'react-native-smart-carousel';
import { PilatesStudio } from "../assets/Images/pilates studio.jpg";
import { barbershop } from "../assets/Images/barbershop.jpg";
import { artstudio } from "../assets/Images/artstudio.jpg";
import Icon from 'react-native-vector-icons/FontAwesome';

import Space from "../Classes/Space";
import Availabillity from "../Classes/Availabillity";

class SpaceCard extends Component {
    constructor(props) {
        super(props);
    }
    getHour() {
        let weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][new Date().getDay()];
        for (let j = 0; j < this.props.Availablities.length; j++) {
            if (this.props.Availablities[j].spaceId == this.props.space.spaceId) {
                return this.props.Availablities[j][weekday];
            }
        }
    }

    showAvailability = () => {
        let availabilities = [];
        let spaceAvailabilities = [];
        for (let i = 0; i < this.props.Availablities.length; i++) {
            if (this.props.Availablities[i].spaceId == this.props.space.spaceId) {
                spaceAvailabilities = this.props.Availablities[i];
            }
        }
        Object.keys(spaceAvailabilities).map((item, value) => {
            let val = spaceAvailabilities[item];
            if (item != "spaceId" && item != "id")
                availabilities.push({ "Day": item, "val": val })
        });
        return availabilities
    }


    render() {


        const starIcon = require("../assets/Images/starIcon.jpg");
        const starIconPNG = require("../assets/Images/starIconPNG.png");

        const PilatesStudio = require("../assets/Images/pilates studio.jpg");
        const barbershop = require("../assets/Images/barbershop.jpg");
        const artstudio = require("../assets/Images/artstudio.jpg");

        let pics = [];
        let i;
        for (i = 1; i < 6; i++) {
            if (this.props.space["image" + i] != "")
                pics.push({ "id": i, "imagePath": this.props.space["image" + i] });
        }


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

            < ScrollView style={{ width: '90%', backgroundColor: "#fff", flex: 1, borderColor: "#056b60", borderWidth: 2, marginBottom: "10%" }
            } ref={(c) => { this.parentScrollView = c; }}>

                <View style={{ height: "60%", }}>
                    <Carousel


                        align={'center'}
                        navigation={true}
                        navigationColor={"#056b60"}
                        parentScrollViewRef={this.parentScrollView}
                        data={pics}
                    />

                </View>
                <TouchableHighlight onPress={() => { this.props.navigation.navigate('SpacePage', { Space: this.props.space, Availablities: this.showAvailability() }); this.props.spaceSelected(this.props.space) }} underlayColor="white">
                    <View style={{ width: "100%", height: "40%", padding: "2%" }}>

                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <View >
                                <Text style={{ fontSize: 15, color: "#696969" }}>{this.props.space.street} {this.props.space.number}, {this.props.space.city}</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={starIconPNG} style={{ width: 17, height: 17, alignSelf: 'center' }} />
                                <Text style={{ fontSize: 15, color: "#696969" }}> 4.2</Text>
                            </View>
                        </View>

                        <View style={{ alignSelf: 'center', paddingTop: '3%', paddingBottom: '3%', paddingHorizontal: '5%', borderBottomColor: "#056b60", borderBottomWidth: 2 }}>
                            <Text style={{ fontSize: 22, fontWeight: '500' }}>{this.props.space.name}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '3%' }}>
                            <View><Text style={{ fontSize: 15, fontWeight: '500' }}>{this.props.space.price} NIS/hr</Text></View>

                            <View><Text style={{ fontSize: 15, fontWeight: '500' }}>{this.getHour()}</Text></View>

                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={{ alignSelf: 'center' }}
                                    size={15} color="black"
                                    name='users' />
                                <Text style={{ fontSize: 15, fontWeight: '500' }}> {this.props.space.capabillity}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight >
            </ScrollView >

        );
    }
}



export default SpaceCard;