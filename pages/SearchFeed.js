import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Button } from 'react-native';

import SpaceCard from '../Components/SpaceCard';
import Icon from 'react-native-vector-icons/FontAwesome';

import User from "../Classes/User";
import Space from "../Classes/Space";
import Equipment from "../Classes/Equipment";
import Facility from "../Classes/Facility";
import Availabillity from "../Classes/Availabillity";
import FieldEq from "../Classes/FieldEq";


class SearchFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {

        return (
            <ScrollView style={{ flex: 1 }} >

                <View style={{ backgroundColor: "#fff", }}>

                    <View style={{ padding: '3%', width: "100%", height: '30%', flexDirection: 'row' }}>
                        <View style={{ width: '20%' }}>
                            <Icon style={{ alignSelf: 'center' }}
                                size={30} color="#056b60"
                                name='search' />
                        </View>

                        <View style={{ flexDirection: 'row', width: '10%' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 20, fontWeight: '400' }}>Time </Text>

                                <TextInput placeholder={""} style={{ width: '5%', fontSize: 15, borderWidth: 1, borderColor: "#056b60" }} />
                                <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 20 }}>:</Text>
                                <TextInput placeholder={""} style={{ width: '5%', fontSize: 15, borderWidth: 1, borderColor: "#056b60" }} />
                                <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 20 }}> - </Text>
                                <TextInput placeholder={""} style={{ width: '5%', fontSize: 15, borderWidth: 1, borderColor: "#056b60" }} />
                                <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 20 }}>:</Text>
                                <TextInput placeholder={""} style={{ width: '5%', fontSize: 15, borderWidth: 1, borderColor: "#056b60" }} />
                            </View>

                        </View>
                        <View style={{ width: '120%' }}>
                            <Icon style={{ alignSelf: 'center' }}
                                size={30} color="#056b60"
                                name='calendar' />
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', padding: '1%', paddingBottom: '4%', height: '20%', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <View style={{ flex: 1 }}><Button title={"Sort"} color='#056b60' /></View>
                        <View style={{ flex: 1 }}><Button title={"Filter"} color='#056b60' /></View>
                        <View style={{ flex: 1 }}><Button title={"Map"} color='#056b60' /></View>

                    </View>

                    <View style={{ alignItems: 'center' }}>

                        <SpaceCard />
                        <SpaceCard />
                        <SpaceCard />
                        <SpaceCard />
                        <SpaceCard />
                        <SpaceCard />


                    </View>




                </View>
            </ScrollView>
        );
    }
}



export default SearchFeed;