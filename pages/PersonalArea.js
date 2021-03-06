import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import User from '../Classes/User';
import Favourite from '../Classes/Favourite';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyDetails from "./Personal Area Pages/MyDetails";
import NextOrderSpaceModal from "./Personal Area Pages/NextOrderSpaceModal";


class PersonalArea extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,

        };
    }

    ShowNextOrder = () => {
        let space = 0;
        let Big = new Date();
        //let date = today.getDate() + "/" + parseInt(today.getMonth() + 1) + "/" + today.getFullYear();

        // let da = new Date((d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear())
        let ord = ""
        let userOrders = [];
        let userOrdersSpaces = [];
        let lateSpace = 0;
        this.props.Orders.map((order, index) => {
            if (order.userId == this.state.user.userId) {
                userOrders.push(order)
                let tempDate = new Date(order.reservationDate)
                if (tempDate.getFullYear() > Big.getFullYear()
                    || tempDate.getDate() > (Big.getMonth() + 1)
                    || (tempDate.getMonth + 1) >= Big.getDate()) {
                    Big = tempDate
                    space = order.spaceId;
                    ord = order;
                }
            }
        })
        console.log("userOrders: ", userOrders, "SpaceId= ", space, "Big: ", Big);
        console.log("Spaces: ", this.props.Spaces);
        for (let i = 0; i < this.props.Spaces.length; i++) {
            userOrdersSpaces.push(this.props.Spaces[i])
            if (space == this.props.Spaces[i].spaceId) {
                lateSpace = this.props.Spaces[i];
                console.log(this.props.Spaces[i].name);

            }
        }

        return [lateSpace, ord, userOrders, userOrdersSpaces]
    }



    render() {
        this.ShowNextOrder()
        const DetailsIcon = require("../assets/Images/detailsIcon.jpg");

        return (
            <ScrollView style={{ flex: 1 }} >
                <View style={{ paddingTop: '5%', paddingHorizontal: '10%', alignItems: 'center' }}>
                    <View>
                        <Image source={this.state.user.photo} style={{ width: 130, height: 130, borderRadius: 130 / 2, borderColor: '#056b60', borderWidth: 3 }} />
                        <Text style={{ paddingTop: '2%', fontWeight: '500', fontSize: 16 }}>Hello, {this.props.user.fullName}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: '5%' }}>
                        <Text style={{ fontSize: 18 }}>Your next order is: </Text>
                        <NextOrderSpaceModal next={true} SpaceOrder={this.ShowNextOrder()} />
                    </View>
                    <View style={{ alignSelf: 'flex-start', flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                            <View style={{ alignItems: 'center', flexDirection: 'column', marginHorizontal: '15%' }}>

                                <MyDetails user={this.state.user} />
                                {/* <View style={{ alignItems: 'center', width: 50, height: 50, borderRadius: 50 / 2, borderColor: '#056b60', borderWidth: 2 }}>
                                    <Icon

                                        name='user'
                                        size={40}
                                        color='#595959'
                                    />
                                </View>
                                <Text>My details</Text> */}

                            </View>

                            <View style={{ alignItems: 'center', flexDirection: 'column', marginHorizontal: '3%' }}>
                                
                                <NextOrderSpaceModal next={false} SpaceOrder={this.ShowNextOrder()} />
                                {/* <View style={{ alignItems: 'center', width: 50, height: 50, borderRadius: 50 / 2, borderColor: '#056b60', borderWidth: 2 }}>
                                    <Icon

                                        name='calendar-check-o'
                                        size={35}
                                        color='#595959'
                                    />
                                </View>
                                <Text>My orders</Text> */}

                            </View>

                            <View style={{ alignItems: 'center', flexDirection: 'column', marginHorizontal: '15%' }}>
                                <View style={{ alignItems: 'center', width: 50, height: 50, borderRadius: 50 / 2, borderColor: '#056b60', borderWidth: 2 }}>
                                    <Icon

                                        name='cog'
                                        size={40}
                                        color='#595959'
                                    />
                                </View>
                                <Text>Settings</Text>
                                <Text style={{ color: 'red', fontSize: 12, fontWeight: '500' }}>coming soon</Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', paddingTop: '10%' }}>
                            <TouchableHighlight style={{ alignItems: 'center', flexDirection: 'column', marginHorizontal: '11%' }} onPress={() => this.props.navigation.navigate('Favorites')}>
                                <View >
                                    <View style={{ alignItems: 'center', width: 50, height: 50, borderRadius: 50 / 2, borderColor: '#056b60', borderWidth: 2 }}>
                                        <Icon

                                            name='heart'
                                            size={35}
                                            color='#595959'
                                        />
                                    </View>
                                    <Text>My Favorites</Text>

                                </View>
                            </TouchableHighlight>

                            <View style={{ alignItems: 'center', flexDirection: 'column', }}>
                                <View style={{ alignItems: 'center', width: 50, height: 50, borderRadius: 50 / 2, borderColor: '#056b60', borderWidth: 2 }}>
                                    <Icon

                                        name='home'
                                        size={40}
                                        color='#595959'
                                    />
                                </View>
                                <Text>My spaces</Text>
                                <Text style={{ color: 'red', fontSize: 12, fontWeight: '500' }}>coming soon</Text>
                            </View>

                            <View style={{ alignItems: 'center', flexDirection: 'column', marginHorizontal: '17%' }}>
                                <View style={{ alignItems: 'center', width: 50, height: 50, borderRadius: 50 / 2, borderColor: '#056b60', borderWidth: 2 }}>
                                    <Icon

                                        name='question'
                                        size={40}
                                        color='#595959'
                                    />
                                </View>
                                <Text>Help&About </Text>
                                <Text style={{ color: 'red', fontSize: 12, fontWeight: '500' }}>coming soon</Text>
                            </View>


                        </View>



                    </View>
                </View>
            </ScrollView>
        );
    }
}
export default PersonalArea;




