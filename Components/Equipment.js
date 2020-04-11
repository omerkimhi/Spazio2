import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Accordion, Card} from 'react-bootstrap';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

class Equipment extends Component {
    render() {
        return (
            <View>
                <Accordion>
                    <Card style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Text style={{ color: 'white', fontSize: 22 }}>Equipment: </Text>
                            <Icon color='#595959'
                                size={30}
                                name='caret-down' />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            </View>
        );
    }
}


export default Equipment;