import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Accordion, Card } from 'react-bootstrap';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

class SpaceDescription extends Component {
    render() {
        return (
            <View>
                <Accordion>
                    <Card style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Text style={{ color: 'black', fontSize: 22 }}>Description: </Text>
                            <Icon color='#595959'
                                size={30}
                                name='caret-down' />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <TextInput
                                    onChangeText={(value) => { this.props.getData(value, "Description") }}
                                    style={{ height: 80, width: 300, borderColor: 'gray', borderWidth: 1 }} multiline={true} placeholder="Write your space decription here.." />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            </View>
        );
    }
}


export default SpaceDescription;