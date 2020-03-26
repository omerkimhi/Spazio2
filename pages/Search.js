import React, { Component } from 'react';
import { Picker, ScrollView, StyleSheet, Text, View, TextInput, Image, TouchableHighlight } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DropdownButton, Dropdown, ButtonGroup, Button, Accordion, Card } from 'react-bootstrap'



class SearchPage extends Component {


    render() {



        return (
            <View style={{ flex: 1, paddingTop: 25, backgroundColor: '#fff' }}>
               
                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: '#056b60', fontSize: 25, paddingBottom: 10 }}>Field </Text>

                        <DropdownButton
                            variant="outline-secondary"
                            title="Please select"
                            size="md"
                        >
                            <Dropdown.Item href="#">Beauty</Dropdown.Item>
                            <Dropdown.Item href="#">Sport</Dropdown.Item>
                            <Dropdown.Item href="#">Art</Dropdown.Item>

                        </DropdownButton>
                    </View>
                    <View style={{}}>
                        <View style={{}}>
                            <Text style={{ color: '#056b60', fontSize: 25, paddingBottom: 2, alignSelf: 'center' }}>Location </Text>
                            <ButtonGroup aria-label="Basic example">

                                <Button variant="secondary">Near me</Button>
                                <Button variant="secondary">By address</Button>

                            </ButtonGroup>
                        </View>

                        <View>
                            <Text style={{ color: '#056b60', fontSize: 25, paddingBottom: 2, alignSelf: 'center' }}>Time </Text>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary">Today</Button>
                                <Button variant="secondary">By date</Button>

                            </ButtonGroup>

                        </View>
                    </View>


                    {/* <select value={optionsState} style={{width:80, color: '#056b60', borderColor:'#056b60'}}>
                        <option value="A">Beauty</option>
                        <option value="B">Sport</option>
                        <option value="C">Art</option>
                    </select> */}

                    {/* <Input
                    inputContainerStyle={{color:'#056b60', borderColor:'#056b60', borderWidth:2, borderRadius:10}}
                    placeholder="Example: Sport"/> */}

                </View>






            </View>
        );
    }
}



export default SearchPage;