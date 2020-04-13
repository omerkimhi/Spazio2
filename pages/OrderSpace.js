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

    render() {


        return (

            < ScrollView style={{ backgroundColor: "#fff", flex: 1, }} ref={(c) => { this.parentScrollView = c; }}>
                <View>
                    <DateSelector />
                </View>
            </ScrollView >

        );
    }
}



export default OrderSpace;