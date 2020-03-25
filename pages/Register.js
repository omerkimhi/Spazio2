import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput, Image, TouchableHighlight } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddSpaceModal from '../Components/AddSpaceModal.js'

class Register extends Component {


    constructor(props) {
        super(props);

        this.state = {
            Email: "",
            Password: "",
            FirstName: "",
            LastName: "",
            PhoneNumber: "",
            addedUsers: []
        };
    }

    componentDidMount() {
        this.apiUrl = "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/spazioUser/";

    }

    EmailChanged = (event) => {
        this.setState({ Email: event })
    }
    PasswordChanged = (event) => {
        this.setState({ Password: event })
    }
    FirstNameChanged = (event) => {
        this.setState({ FirstName: event })
    }
    LastNameChanged = (event) => {
        this.setState({ LastName: event })
    }
    PhoneNumberChanged = (event) => {
        this.setState({ PhoneNumber: event })
    }


    Fullname = (a, b) => {
        return (a + "  " + b);
    }



    addUser = () => {


        const user = {
            Email: this.state.Email,
            Password: this.state.Password,
            UserName: this.Fullname(this.state.FirstName, this.state.LastName),
            PhoneNumber: this.state.PhoneNumber


        };
        console.log("im user", user.Name)


        fetch(this.apiUrl, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: new Headers({
                'Content-type': 'application/json; charset=UTF-8',

                //very important to add the 'charset=UTF-8'!!!!
            })
        })
            .then(res => {
                console.log('res=', res);
                return res.json()
            })
            .then(
                (result) => {
                    console.log("fetch POST= ", result);

                },
                (error) => {
                    console.log("err post=", error);
                });

        this.setState({

            addedUsers: this.state.addedUsers.concat(user),

            // adjustedUsers:this.state.adjustedUsers.filter(m=>m.id!==item.id)

        })
        for (var i = 0; i < this.state.addedUsers.length; i++) {
            console.log(this.state.addedUsers[i]);
        }
    }

    render() {
        const logow1 = require('../assets/Images/LogoW.png');
        const personI = require('../assets/Images/PersonIcon.png');
        const spaceI = require('../assets/Images/SpaceIcon.png');

        return (
            <ScrollView>
                <LinearGradient colors={['#056b60', 'white']} style={{ flex: 1 }} >
                    <View style={{ paddingTop: 35 }}>
                       
                        {/* <View style={{ alignSelf: 'center', alignItems: 'center', height: '20%', flexDirection: 'row' }}>
                            <Image source={logow1} style={{ width: 50, height: 50 }} />
                            <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }}>SPAZIO</Text>
                        </View> */}

                        <View style={styles.container}>

                            <View style={{ paddingLeft: '5%', flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column', width: '60%' }}>
                                    <Text style={{ color: 'white', fontSize: 22 }}>Email adress:</Text>
                                    <Input onChangeText={this.EmailChanged} placeholder=" email@adress.com"
                                        leftIcon={
                                            <Icon
                                                name='envelope'
                                                size={24}
                                                color='#595959'
                                            />
                                        } />
                                    <Text style={{ color: 'white', fontSize: 22 }}>Password:</Text>
                                    <Input onChangeText={this.PasswordChanged} placeholder=" Password"
                                        leftIcon={
                                            <Icon
                                                name='lock'
                                                size={24}
                                                color='#595959'
                                            />
                                        } />
                                    <Text style={{ color: 'white', fontSize: 22 }}>Phone number:</Text>
                                    <Input onChangeText={this.PhoneNumberChanged} placeholder=" 05X-XXXX-XXX"
                                        leftIcon={
                                            <Icon
                                                name='phone'
                                                size={24}
                                                color='#595959'
                                            />
                                        } />

                                    <Text style={{ color: 'white', fontSize: 22 }}>First name:</Text>
                                    <Input onChangeText={this.FirstNameChanged} placeholder="" />
                                    <Text style={{ color: 'white', fontSize: 22 }}>Last name:</Text>
                                    <Input onChangeText={this.LastNameChanged} />


                                    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                        <Icon
                                            name='id-card'
                                            size={24}
                                            color='#595959'
                                        />
                                        <Text style={{ color: '#595959', alignSelf: 'center', fontSize: 18, paddingLeft: 2 }}> Add your ID</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingTop: 2, paddingTop: '5%' }}>
                                        <Icon
                                            name='credit-card'
                                            size={24}
                                            color='#595959'
                                        />
                                        <Text style={{ color: '#595959', alignSelf: 'center', fontSize: 18, paddingLeft: 2 }}> Add your credit-card</Text>
                                    </View>

                                </View>
                                <View style={{ width: '35%', alignItems: 'center', marginTop: '10%', paddingLeft: '5%' }}>
                                    <Image source={personI} style={{ width: 70, height: 70 }} />
                                    <Text style={{ color: '#595959', marginBottom: 20, fontSize: 18 }}>Add a photo</Text>

                                    <AddSpaceModal />

                                </View>

                                <View>

                                </View>

                            </View>
                            <View style={{ paddingTop: 15, height: 30 }}>
                                <Button color='#056b60' title='Register' onPress={this.addUser} />
                            </View>

                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
        );
    }
}
export default Register;



const styles = StyleSheet.create({
    container: {



    },
});