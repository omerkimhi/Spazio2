import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Text, ScrollView, Image, TouchableHighlight } from 'react-native';

export default class FavoriteSpaces extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {

        let cards = [];

        // this.props.Spaces.map((space) => {
        //     cards.push({
        //         id: space.spaceId,
        //         title: space.name,
        //         picture: Imageurl1,
        //         content: <Tex>space.name</Tex>
        //     })
        // })

        console.log("Favorite spaces: ", this.props.Spaces)
        return (
            <View>
                <Text>
                    Favorite Spaces Page
                </Text>
            </View>
        );
    }
}



