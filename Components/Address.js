import React, { Component } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import shortid from "shortid";
import { Autocomplete, withKeyboardAwareScrollView } from "react-native-dropdown-autocomplete";
import { Button, Accordion, Card } from 'react-bootstrap';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { cities } from '../files/cities2';


class Address extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Cityarray: [],
            Streetarray: [],
            City: "",
            Street: "",
            Number: ""
        };
    }



    sendData = (stateName, value) => {
        this.props.sendData(stateName, value)
    }

    handleSelectItem(item, index) {
        const { onDropdownClose } = this.props;
        onDropdownClose();
        console.log(item);
        this.sendData("City", item)
    }



    render() {



        const autocompletes = [...Array(1).keys()];



        const { scrollToInput, onDropdownClose, onDropdownShow } = this.props;


        return (
            <View style={styles.autocompletesContainer}>

                {/* <SafeAreaView>
                    {autocompletes.map(() => (
                        <Autocomplete
                            placeholder="City"
                            key={shortid.generate()}
                            style={styles.input}
                            scrollToInput={ev => scrollToInput(ev)}
                            handleSelectItem={(item, id) => this.handleSelectItem(item, id)}
                            onDropdownClose={() => onDropdownClose()}
                            onDropdownShow={() => onDropdownShow()}
                            renderIcon={() => (
                                <Icon
                                    size={20} color="#c7c6c1" style={styles.plus}
                                    name='map-marker' />
                            )}

                            minimumCharactersCount={2}
                            highlightText
                            Autocomplete data={{ cities }.cities} valueExtractor={item => item}
                            //here you put the array of the cities
                            rightContent
                            rightTextExtractor={item => item.properties}
                        />
                    ))}
                </SafeAreaView> */}
                {/* <SafeAreaView>
                    {autocompletes.map(() => (
                        <Autocomplete
                            placeholder="Street"
                            key={shortid.generate()}
                            style={styles.input}
                            scrollToInput={ev => scrollToInput(ev)}
                            handleSelectItem={(item, id) => this.handleSelectItem(item, id)}
                            onDropdownClose={() => onDropdownClose()}
                            onDropdownShow={() => onDropdownShow()}
                            renderIcon={() => (
                                <Icon
                                    size={20} color="#c7c6c1" style={styles.plus}
                                    name='map-signs' />
                            )}

                            minimumCharactersCount={2}
                            highlightText
                            
                            //here you put the array of the streets
                            rightContent
                            rightTextExtractor={item => item.properties}
                        />
                    ))}
                </SafeAreaView> */}

                <Input
                    containerStyle={{ width: 300 }}
                    label="City"
                    leftIcon={{ name: 'chevron-right' }}
                    onChangeText={(value) => { this.setState({ Street: value }, this.sendData("City", value)) }}
                />
                <Input
                    containerStyle={{ width: 300 }}
                    label="Street"
                    leftIcon={{ name: 'chevron-right' }}
                    onChangeText={(value) => { this.setState({ Street: value }, this.sendData("Street", value)) }}
                />

                <Input
                    containerStyle={{ width: 100 }}
                    label="Number"
                    leftIcon={{ name: 'chevron-right' }}
                    onChangeText={(value) => { this.setState({ Number: value }, this.sendData("Number", value)) }}
                />


            </View>
        );
    }
}
const styles = StyleSheet.create({
    autocompletesContainer: {
        paddingTop: 0,
        zIndex: 1,
        width: "100%",
        paddingHorizontal: 8,
    },
    input: { maxHeight: 40 },
    inputContainer: {
        display: "flex",
        flexShrink: 0,
        flexGrow: 0,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#c7c6c1",
        paddingVertical: 13,
        paddingLeft: 12,
        paddingRight: "5%",
        width: "100%",
        justifyContent: "flex-start",
    },
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    plus: {
        position: "absolute",
        left: 15,
        top: 10,
    },
});

export default withKeyboardAwareScrollView(Address);