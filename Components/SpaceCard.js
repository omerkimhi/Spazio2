import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import Carousel from 'react-native-smart-carousel';

class SpaceCard extends Component {
    render() {

        const PilatesStudio = require("../assets/Images/pilates studio.jpg");
        const barbershop = require("../assets/Images/barbershop.jpg");
        const artstudio = require("../assets/Images/artstudio.jpg");
        const datacarousel = [
            {
                "id": 1,
                "title": "First Image",
                "imagePath":"../assets/Images/artstudio.jpg", // URL
            },
            {
                "id": 2,
                "title": "Second Image",

                "imagePath": "../assets/Images/pilates studio.jpg", // imported
            },
            {
                "id": 3,
                "title": "Thirs Image",

                "imagePath": "../assets/Images/pilates studio.jpg", // imported
            }
        ];


        return (

            <View style={{ backgroundColor: "#fff", flex: 1, borderColor: "#056b60", borderWidth: 1 }}>

                <Carousel
                    navigationType="dots"
                    data={datacarousel}
                />

                {/* <View style={{ height: "60%", width: "100%" }}>
                    <Carousel height="100%">
                        <Carousel.Item height="100%">
                            <img
                                className="d-block w-100"

                                src={PilatesStudio}

                            />


                        </Carousel.Item>
                        <Carousel.Item height="100%">
                            <img
                                className="d-block w-100"

                                src={barbershop}

                            />

                        </Carousel.Item>
                        <Carousel.Item height="100%">
                            <img
                                className="d-block w-100"

                                src={artstudio}

                            />

                        </Carousel.Item>
                    </Carousel>
                </View>

                <View style={{ height: "40%" }}>
                    <Text>sdfdf</Text>

                </View> */}


            </View>

        );
    }
}



export default SpaceCard;