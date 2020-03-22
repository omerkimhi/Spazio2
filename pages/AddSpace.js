import React, { Component } from 'react';
import { Picker, FlatList, StyleSheet, Text, View, Button, TextInput, Image, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonGroup, Input } from 'react-native-elements';

class AddSpace extends Component {
    constructor(props) {
        super(props);

        this.state = {
            field: 2

        }
        this.updateField = this.updateField.bind(this)
    }

    updateField(field) {
        this.setState({ field })
    }



    render() {

        const buttons = ['טיפוח ויופי', 'ספורט', 'אומנות']
        const { field } = this.state

        return (
            <LinearGradient colors={['#056b60', 'white']} style={{ flex: 1, paddingTop: '7%' }} >

                <View style={{ width: '10%', alignSelf: 'flex-end', paddingRight: '5%' }}>
                    <Button title='X' />
                </View>

                <View style={{ paddingLeft: '10%' }}>
                    <View style={{ width: '80%' }}>
                        <Text style={{ fontSize: 18, color: '#fff', fontWeight: '500' }}>Add your spaces</Text>
                    </View>
                </View>

                <View style={{ paddingLeft: '4%', paddingTop: '10%' }}>

                    <View style={{ flexDirection: 'column', width: '60%' }}>
                        <Input
                            placeholder='Space name'
                            leftIcon={{ name: 'chevron-right' }}
                        />

                        <View style={{ flexDirection: 'row', paddingTop: 20, alignItems:'center' }}>
                            <Text style={{ color: 'white', fontSize: 22 }}>Field:  </Text>
                            <ButtonGroup
                                onPress={this.updateField}
                                field={field}
                                buttonStyle={{ height: 100 }}
                                buttons={buttons}
                                containerStyle={{ width: 250, backgroundColor: 'transparent' }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems:'center', paddingTop:20}}>
                            <Text style={{ color: 'white', fontSize: 22 }}>Calendar: </Text>
                            <Icon 
                            size='40'
                                name='calendar' />
                        </View>

                        <View style={{ flexDirection: 'row', paddingTop: '10%' }}>
                        <Icon color='#595959'
                            size='30'
                                name='photo' />
                        
                            <Text style={{ color: '#595959', alignSelf: 'center', fontSize: 18, paddingLeft: 2 }}>Add space picture</Text>
                        </View>

                    </View>



                </View>

            </LinearGradient>
        );
    }
}




export default AddSpace;