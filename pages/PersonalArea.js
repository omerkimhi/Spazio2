import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Image,
    TouchableHighlight
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import User from '../Classes/User';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




class PersonalArea extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }



    render() {

        const Zaki = require("../assets/Images/Zaki.jpg");

        console.log(this.props.user);
        return (
            <View style={{ flex: 1, paddingTop: '10%', paddingHorizontal: '10%', alignItems: 'center' }}>
                <Image source={this.props.photo} style={{ width: 100, height: 100, borderRadius: 100 / 2, borderColor: '#056b60', borderWidth: 3 }} />
                <Text style={{ paddingTop: '2%', fontWeight: '500', fontSize: 15 }}>Hello {this.props.user.fullName}</Text>
            </View>
        );
    }
}
export default PersonalArea;




