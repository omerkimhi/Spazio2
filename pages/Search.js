import React, { Component, useState } from 'react';
import { Picker, ScrollView, StyleSheet, Text, View, TextInput, Image, TouchableHighlight } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Modal, Carousel, ButtonToolbar, ToggleButtonGroup, ToggleButton, DropdownButton, Dropdown, ButtonGroup, Button, Accordion, Card, AccordionToggle } from 'react-bootstrap'
import Address from '../Components/Address';
import SpacesCarousel from '../Components/SpacesCarousel.js';
import AddressModal from '../Components/AddressModal.js';

class SearchPage extends Component {


    render() {



        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ paddingTop: 20, backgroundColor: '#fff' }}>
                    <View></View>

                    <View style={{ alignItems: 'center', paddingBottom: 25 }}>
                        <View style={{}}>
                            <Text style={{ color: '#056b60', fontSize: 25, paddingBottom: 2, alignSelf: 'center' }}>Field </Text>


                            <ButtonToolbar>
                                <ToggleButtonGroup type="radio" aria-label="Basic example" name="options">
                                    <ToggleButton variant="outline-secondary" value={1}>Beauty</ToggleButton>
                                    <ToggleButton variant="outline-secondary" value={2}>Sport</ToggleButton>
                                    <ToggleButton variant="outline-secondary" value={3}>Art</ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>

                        </View>
                        <View style={{ paddingBottom: 15 }}>
                            <View style={{}}>
                                <Text style={{ color: '#056b60', fontSize: 25, paddingBottom: 2, alignSelf: 'center' }}>Location </Text>

                                <AddressModal />

                                {/* <ButtonToolbar>
                                    <ToggleButtonGroup type="radio" aria-label="Basic example" name="options" defaultValue={1}>
                                        <ToggleButton variant="outline-secondary" value={1}>Near me</ToggleButton>
                                        <ToggleButton variant="outline-secondary" value={2}>asd</ToggleButton>

                                                    */}
                                        {//if we'll decide do use accordion!!!
                                        
                                        
                                        /* <Accordion> 
                                                <Card style={{ backgroundColor: '#b2b2b2', borderColor: 'transparent' }}>
                                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                                        <Text style={{ color: 'white' }}>Address </Text>
                                                        <Icon color='#595959'
                                                            size='50'
                                                            name='caret-down' />
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="0">
                                                        <Card.Body style={{ backgroundColor: '#fff' }}>
                                                            <Address />
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>

                                            </Accordion> */}


{/* 
                                    </ToggleButtonGroup>
                                </ButtonToolbar> */}


                                {/* 
                            <ButtonGroup aria-label="Basic example">

                                <Button variant="secondary">Near me</Button>
                                <Accordion defaultActiveKey="0">
                                    <Card style={{ backgroundColor: '#b2b2b2', borderColor: 'transparent' }}>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            <Text style={{ color: 'white', fontSize: 22 }}>Address </Text>
                                            <Icon color='#595959'
                                                size='50'
                                                name='caret-down' />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body style={{ backgroundColor: '#fff' }}>
                                                <Address />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                </Accordion>

                            </ButtonGroup> */}
                            </View>

                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: '#056b60', fontSize: 25, paddingBottom: 2, alignSelf: 'center' }}>Time </Text>

                                <ButtonToolbar>
                                    <ToggleButtonGroup type="radio" aria-label="Basic example" name="options" defaultValue={1}>
                                        <ToggleButton variant="outline-secondary" value={1}>Today</ToggleButton>
                                        <ToggleButton variant="outline-secondary" value={2}>By Date</ToggleButton>
                                    </ToggleButtonGroup>
                                </ButtonToolbar>

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
                        <View>
                            <Button block style={{ backgroundColor: "#056b60" }}>Search</Button>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', backgroundColor: '#d9d9d9', paddingVertical: 10, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 17, color: '#056b60', fontWeight: '600' }}>257 </Text>
                        <Text style={{ fontSize: 17, fontWeight: '400' }}>Spaces registered    </Text>
                        <Text style={{ fontSize: 17, color: '#056b60', fontWeight: '600' }}>2,376 </Text>
                        <Text style={{ fontSize: 17, fontWeight: '400' }}>Tenants registered</Text>
                    </View>

                    <View style={{ paddingTop: 15, alignItems: 'center' }}>
                        <Text style={{ fontSize: 17, fontWeight: '600', color: '#056b60' }}> Last added spaces</Text>
                        <View style={{ paddingBottom: 10 }}>
                            <SpacesCarousel />

                        </View>
                    </View>




                </View>
            </ScrollView>
        );
    }
}



export default SearchPage;