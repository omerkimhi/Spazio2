import React, { Component } from 'react';
import { Picker, FlatList, StyleSheet, Text, View, TextInput, Image, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Availability from '../Components/Availability.js';
import Facilities from '../Components/Facilities.js';
import Equipment from '../Components/Equipment.js';
import SpaceTermsAndRules from '../Components/SpaceTermsAndRules.js'
import { ButtonGroup, Button, InputGroup, FormControl } from 'react-bootstrap';
import DepoistBank from '../Components/DepositBank.js';
import SpaceDescription from '../Components/SpaceDescription.js'


import Space from "../Classes/Space";
import Availabillity from "../Classes/Availabillity";
import FieldEq from "../Classes/FieldEq";

class AddSpace extends Component {
    constructor(props) {
        super(props);
        this.Eq = React.createRef();
        this.state = {
            spaceId: 0,
            field: "",
            spaceName: "",
            spaceAddressCity: "",
            spaceAddressStreet: "",
            spaceAddressNumber: "",
            spacePrice: 0,
            spaceCapacity: 0,
            spaceBank: "",
            spaceBranch: "",
            spaceAccount: "",
            spaceImage1: "",
            spaceImage2: "",
            spaceImage3: "",
            spaceImage4: "",
            spaceImage5: "",
            spaceUserEmail: "",
            Availability: [],
            Facilities: [],
            Equipment: [],
            FieldEquipment: [],
            Description: "",
            Terms: "",


        }
        this.updateFieldB = this.updateFieldB.bind(this);
        this.updateFieldS = this.updateFieldS.bind(this);
        this.updateFieldA = this.updateFieldA.bind(this);
    }

    onchangeField = (field) => {
        let tempArray = [];
        this.props.FieldsEquipment.map((item) => {
            if (item.field == field) {
                tempArray.push(item.name)
            }
        });
        this.setState({
            FieldEquipment: tempArray
        }, () => { this.Eq.current.getEq(this.state.FieldEquipment); })
    }



    getAvailability = (ava) => {
        this.setState({
            Availability: ava
        })
    }



    getData = (data, name) => {
        this.setState({
            [name]: data
        }, () => console.log(this.state[name]))
    }

    onChangeText = (text) => {
        this.props.sendSpaceData(text)
    }



    updateFieldB() {
        this.setState({ field: 'Beauty' }, this.onchangeField('Beauty'));

    }


    updateFieldS() {
        this.setState({ field: 'Sport' }, this.onchangeField('Sport'));
    }

    updateFieldA() {
        this.setState({ field: 'Art' }, this.onchangeField('Art'));
    }

    saveChanges = () => {
        let spaceAdded = new Space(this.state.spaceId,
            this.state.spaceName,
            this.state.field,
            this.state.spacePrice,
            this.state.spaceAddressCity,
            this.state.spaceAddressStreet,
            this.state.spaceAddressNumber,
            this.state.spaceCapacity,
            this.state.spaceBank,
            this.state.spaceBranch,
            this.state.spaceImage1,
            this.state.spaceImage2,
            this.state.spaceImage3,
            this.state.spaceImage4,
            this.state.spaceImage5,
            this.state.spaceAccount,
            this.state.spaceUserEmail,
            this.state.Description,
            this.state.Terms);



        this.props.getSpacesAdded(spaceAdded, this.state.Availability, this.state.Facilities, this.state.Equipment)
    }

    sendBankDetails = (kind, value) => {
        if (kind == "bank") {
            this.setState({ spaceBank: value })
        }
        if (kind == "branch") {
            this.setState({ spaceBranch: value })
        }
        else {
            this.setState({ spaceAccount: value })
        }
    }

    render() {



        const { field } = this.state

        return (
            <LinearGradient colors={['#056b60', 'white']} style={{ flex: 1, paddingTop: '7%' }} >



                <View style={{ paddingLeft: '4%', paddingBottom: 20 }}>

                    <View style={{ flexDirection: 'column', width: '60%' }}>
                        <Input
                            placeholder='Space name'
                            leftIcon={{ name: 'chevron-right' }}
                            onChangeText={(value) => { this.setState({ spaceName: value }) }}
                        />

                        <View style={{ paddingLeft: 8, flexDirection: 'row', paddingTop: 20, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 22 }}>Adress:  </Text>
                            <View style={{ flexDirection: 'column' }}>
                                <Input
                                    onChangeText={(value) => { this.setState({ spaceAddressCity: value }) }}
                                    containerStyle={{ width: 200 }}
                                    label="City"
                                    placeholder='Example: Tel Aviv'
                                    leftIcon={{ name: 'chevron-right' }}
                                />
                                <Input
                                    onChangeText={(value) => { this.setState({ spaceAddressStreet: value }) }}
                                    containerStyle={{ width: 200 }}
                                    label="Street"
                                    placeholder='Example: Alenbi'
                                    leftIcon={{ name: 'chevron-right' }}
                                />
                                <Input
                                    onChangeText={(value) => { this.setState({ spaceAddressNumber: value }) }}
                                    containerStyle={{ width: 85 }}
                                    label="Number"
                                    leftIcon={{ name: 'chevron-right' }}
                                />
                            </View>
                        </View>

                        <View style={{ paddingLeft: 8, flexDirection: 'row', paddingTop: 20, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 22 }}>Field:  </Text>

                            <ButtonGroup aria-label="Basic example">
                                <Button variant="outline-dark" onClick={this.updateFieldB}>Beauty</Button>
                                <Button variant="outline-dark" onClick={this.updateFieldS}>Sport</Button>
                                <Button variant="outline-dark" onClick={this.updateFieldA}>Art</Button>
                            </ButtonGroup>

                        </View>

                        <View style={{ paddingLeft: 8, flexDirection: 'row', paddingTop: 7, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 22 }}>Price:  </Text>
                            <Input
                                onChangeText={(value) => { this.setState({ spacePrice: value }) }}
                                placeholder='00.00 NIS/hr'
                                leftIcon={{ name: 'chevron-right' }}
                            />
                        </View>

                        <View style={{ paddingLeft: 8, flexDirection: 'row', paddingTop: 7, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 22 }}>Capacity:  </Text>
                            <Input
                                onChangeText={(value) => { this.setState({ spaceCapacity: value }) }}
                                placeholder=' 0'
                                leftIcon={{ name: 'people' }}
                            />
                        </View>

                        <View style={{ width: 350, alignItems: 'stretch', paddingTop: 20 }}>

                            <SpaceDescription getData={this.getData} />

                            <Availability getAvailability={this.getAvailability} />

                            <Facilities getData={this.getData} />

                            <Equipment ref={this.Eq} getData={this.getData} names={this.state.FieldEquipment} />

                            <View style={{ flexDirection: 'row', paddingTop: '3%', paddingBottom: '3%' }}>
                                <Icon color='#595959'
                                    size={30}
                                    name='photo' />

                                <Text style={{ color: '#595959', alignSelf: 'center', fontSize: 18, paddingLeft: 2 }}>Add space pictures</Text>
                            </View>

                            <SpaceTermsAndRules getData={this.getData} />

                            <DepoistBank sendBankDetails={this.sendBankDetails} />


                        </View>



                    </View>

                </View>


            </LinearGradient >
        );
    }
}




export default AddSpace;