import React, { Component } from 'react';
import { View, Button, Text, ScrollView, Image, TouchableHighlight } from 'react-native';
import { FormCheck } from 'react-bootstrap';

import DateSelector from '../Components/DateSelector';
import CalendarPicker from 'react-native-calendar-picker';
import TimeSelector from '../Components/TimeSelector';

import Space from "../Classes/Space";
import Availabillity from "../Classes/Availabillity";



class OrderSpace extends Component {
    constructor(props) {
        super(props);


        this.state = {

            spaceSelected: "",
            availa: [],
            daySelected: "",
            hoursOfDaySelected: "",
            timeSelected: "",
            dateSelected: "",
            price: 0,
            readTerms: false
        }
    }
    checkAvailability = (day) => {

        this.setState({
            dateSelected: day.format("DD/MM/YYYY")
        }, () => console.log("date selected: ", this.state.dateSelected));

        this.state.availa.map((item) => {
            let itemDay = item.Day.charAt(0).toUpperCase() + item.Day.slice(1);
            if (itemDay == day.format('dddd')) {
                this.setState({
                    hoursOfDaySelected: item.val
                })

            }
        })
    }

    componentDidMount = () => {
        const { Space, Availablity } = this.props.route.params;
        this.setState({
            spaceSelected: Space,
            availa: Availablity
        }, () => { console.log(this.state.availa); })

    }

    timeSelectedChanged = (time) => {
        this.setState({
            timeSelected: time
        }, () => this.setState({
            price: this.state.spaceSelected.price * (Number(this.state.timeSelected.end.substring(0, this.state.timeSelected.end.indexOf(":"))) - Number(this.state.timeSelected.start.substring(0, this.state.timeSelected.start.indexOf(":"))))
        }))
    }

    OrderPlace = () => {

        console.log("The date is: ", this.state.dateSelected);
        console.log("The hours are: ", this.state.timeSelected)
        console.log("the price is: ", this.state.price);
        console.log("ths spaceID is: ", this.state.spaceSelected.spaceId);
        console.log("the user logged ID is: ", this.props.userLogged.userId)

    }


    render() {


        return (
            <View style={{ flex: 1 }}>
                < ScrollView style={{ backgroundColor: "#fff", flex: 1, }} >
                    <View style={{ flex: 1 }}>


                        <View style={{ top: 2, marginBottom: 0 }}>
                            <DateSelector checkAvailability={this.checkAvailability} availa={this.state.availa} spaceSelected={this.state.spaceSelected} />
                        </View>

                        <View style={{ left: '2%', marginTop: -40 }}>
                            <Text style={{ fontWeight: '400' }}>Availability Hours: {this.state.hoursOfDaySelected}</Text>
                        </View>


                        <View style={{ position: 'relative', left: '2%', width: '70%', height: '10%', top: '2%', bottom: '5%' }}>
                            <Text style={{ fontSize: 20, fontWeight: '600', bottom: '3%' }}>Choose hours:</Text>
                            <TimeSelector timeSelectedChanged={this.timeSelectedChanged} hoursOfDaySelected={this.state.hoursOfDaySelected} />
                        </View>
                        <View style={{ top: '5%', }}>
                            <Text>Total price is: {this.state.price}</Text>
                        </View>
                        <View style={{ marginTop: '8%', paddingTop: "2%", paddingBottom: '1%', paddingHorizontal: '4%', borderTopColor: "#d9d9d9", borderTopWidth: 1 }}>
                            <Text style={{ fontSize: 22, fontWeight: '600' }}>Space's terms & rules</Text>
                            <Text style={{ paddingTop: "1%", fontSize: 15, fontWeight: '400', paddingLeft: '2%' }}>{this.state.spaceSelected.termsOfUse}</Text>
                            <FormCheck style={{ fontSize: 13, fontWeight: 'bolder' }} type="radio" onClick={() => this.setState({ readTerms: true })} label="I've read and accept the terms and rules" />
                        </View>

                        <View style={{ top: '3%' }}>
                            <Button disabled={!this.state.readTerms} title="Order" onPress={() => this.OrderPlace()} />
                        </View>

                    </View>
                </ScrollView >
            </View>
        );
    }
}



export default OrderSpace;