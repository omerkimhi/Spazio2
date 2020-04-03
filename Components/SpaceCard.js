import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import Carousel from 'react-native-smart-carousel';
import { PilatesStudio } from "../assets/Images/pilates studio.jpg";
import { barbershop } from "../assets/Images/barbershop.jpg";
import { artstudio } from "../assets/Images/artstudio.jpg";
import Icon from 'react-native-vector-icons/FontAwesome';


class SpaceCard extends Component {
    constructor(props) {
        super(props);
    }



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
            <ScrollView style={{ width: '90%', backgroundColor: "#fff", flex: 1, borderColor: "#056b60", borderWidth: 2, marginBottom: "10%" }} ref={(c) => { this.parentScrollView = c; }}>

                <View style={{ height: "60%", }}>
                    <Carousel


                        align={'center'}
                        navigation={true}
                        navigationColor={"#056b60"}
                        parentScrollViewRef={this.parentScrollView}
                        data={datacarousel}
                    />

                </View>
                <View style={{ width: "100%", height: "40%", padding: "2%" }}>

                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View >
                            <Text style={{ fontSize: 15, color: "#696969" }}>1.2km From your loaction</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 15, color: "#696969" }}> (183) </Text>
                            <Image source={starIconPNG} style={{ width: 17, height: 17, alignSelf: 'center' }} />
                            <Text style={{ fontSize: 15, color: "#696969" }}> 4.2</Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'center', paddingTop: '3%', paddingBottom: '3%', paddingHorizontal: '5%', borderBottomColor: "#056b60", borderBottomWidth: 2 }}>
                        <Text style={{ fontSize: 22, fontWeight: '500' }}>Zaki's Pilates Studio</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '3%' }}>
                        <View><Text style={{ fontSize: 15, fontWeight: '500' }}>85 NIS/hr</Text></View>

                        <View><Text style={{ fontSize: 15, fontWeight: '500' }}>16:00-21:00</Text></View>

                        <View style={{ flexDirection: 'row' }}>
                            <Icon style={{ alignSelf: 'center' }}
                                size={15} color="black"
                                name='users' />
                            <Text style={{ fontSize: 15, fontWeight: '500' }}> 15</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        );
    }
}



export default SpaceCard;