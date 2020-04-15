import React, { Component } from 'react';
import { View, Button, Text, ScrollView, Image, TouchableHighlight } from 'react-native';



class FavoriteSpaces extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        console.log(this.props.Spaces)
        return (
            <View>
                <Text>
                    Favorite Spaces Page
                </Text>
            </View>
        );
    }
}



export default FavoriteSpaces;