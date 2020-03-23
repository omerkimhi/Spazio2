import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Accordion, Card} from 'react-bootstrap';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

class SpaceTermsAndRules extends Component {
    render() {
        return (
            <View>
                <Accordion>
                    <Card style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Text style={{ color: 'white', fontSize: 22 }}>Space Terms&Rules: </Text>
                            <Icon color='#595959'
                                size='50'
                                name='caret-down' />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <TextInput style={{ height: 80, width:300, borderColor: 'gray', borderWidth: 1 }} multiline={true} placeholder="Write your terms and rules here.."/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            </View>
        );
    }
}


export default SpaceTermsAndRules;