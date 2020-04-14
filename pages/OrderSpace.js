import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableHighlight } from 'react-native';
import DateSelector from '../Components/DateSelector';
import CalendarPicker from 'react-native-calendar-picker';

import Space from "../Classes/Space";
import Availabillity from "../Classes/Availabillity";



class OrderSpace extends Component {
    constructor(props) {
        super(props);
    }
    checkAvailability(itemValue, itemIndex) {

    }

    render() {


        return (

            < ScrollView style={{ backgroundColor: "#fff", flex: 1, }} >
                <View>

                    <View style={{ top: 2 }}>
                        <DateSelector />
                    </View>
                </View>
            </ScrollView >

        );
    }
}



export default OrderSpace;