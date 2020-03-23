import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Accordion, Card, FormCheck } from 'react-bootstrap';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

class Facilities extends Component {
    render() {
        return (
            <View>
                <Accordion>
                    <Card style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Text style={{ color: 'white', fontSize: 22 }}>Facilities: </Text>
                            <Icon color='#595959'
                                size='50'
                                name='caret-down' />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <FormCheck label="Parking" />
                            <FormCheck label="Toilet" />
                            <FormCheck label="Kitchen" />
                            <FormCheck label="intercom" />
                            <FormCheck label="Accessible" />
                            <FormCheck label="Air Conditioning" />
                            <FormCheck label="Wi-fi" />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            </View>
        );
    }
}



export default Facilities;