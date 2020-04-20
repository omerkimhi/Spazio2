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
            Facilities: [],

            availa: [],
            spaceSelected: "",

        };

    }


    componentDidMount() {
     
        const { Space, Availablities } = this.props.route.params;
        this.setState({
            spaceSelected: Space,
            availa: Availablities,
            EquipmentList: this.props.EquipmentList,
            Facilities: this.props.Facilities,
            FieldsEquipment: this.props.FieldsEquipment
        }, () => { console.log(this.state.availa) })


    }

    showAvailability = () => {
        return (
            this.state.availa.map((item, key) => <Text style={{ textTransform: 'capitalize' }}>{item.Day}: {item.val}</Text>)
        )
    }


    checkFacilities = () => {

        let fac = [];
        let val = ""


        Object.keys(this.state.Facilities[0]).map((item, value) => {
            val = this.state.Facilities[0][item];
            if (val == true)
                fac.push({ "Facility": item, "val": val })
        });

        return fac
    }


    render() {
        let facili = [];
        if (this.state.Facilities.length != 0) { facili = this.checkFacilities() }
        console.log("fac: ", facili)
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

        console.log(pics);

        if (this.state.spaceSelected == "") {
            return (<Text>loading..</Text>)

        }
        else
            console.log("space selected: ", this.state.spaceSelected);
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
                                    name='shekel' />
                                <Text style={{ fontWeight: '600', fontSize: 15 }}> {this.state.spaceSelected.price} NIS/hr</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{ paddingTop: "2%", paddingBottom: '1%', paddingHorizontal: '4%', borderBottomColor: "#d9d9d9", borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 22, fontWeight: '600' }}>Description</Text>
                        <Text style={{ paddingTop: "1%", fontSize: 15, fontWeight: '400', paddingLeft: '2%' }}>{this.state.spaceSelected.description}</Text>
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
                        {this.state.EquipmentList.map((item,index) => {
                            return (item.spaceId === this.state.spaceSelected.spaceId) ? (<View style={{ flexDirection: 'row', paddingTop: '1%' }}>
                                <Icon style={{ marginTop: 2 }}
                                    size={15} color="#056b60"
                                    name='check-circle-o' />
                                <Text> {item.name}</Text>
                            </View>) : null
                        }
                        )}
                    </View>
                    <View style={{ marginBottom: '5%', paddingTop: "5%", paddingBottom: '1%', paddingHorizontal: '4%', borderBottomColor: "#d9d9d9", borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 22, fontWeight: '600' }}>Facilities</Text>

                        {facili.map((item,index) => {
                            return (<View style={{ flexDirection: 'row', paddingTop: '1%' }}>
                                <Icon style={{ marginTop: 2 }}
                                    size={15} color="#056b60"
                                    name='check-circle-o' />
                                <Text> {item.Facility}</Text>
                            </View>)
                        }
                        )}

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