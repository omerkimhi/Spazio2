import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Accordion, Card } from 'react-bootstrap';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

class DepositBank extends Component {
    render() {
        return (
            <View>
                <Accordion defaultActiveKey="0">
                    <Card style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Text style={{ color: 'white', fontSize: 22 }}>Deposit Bank Account: </Text>
                            <Icon color='#595959'
                                size='50'
                                name='caret-down' />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <View style={{ flexDirection: 'column', paddingTop: 3, alignItems: 'center' }}>

                                        <Input
                                        label="Bank Number"
                                            placeholder="Example: 'Leumi'"
                                            leftIcon={{ name: 'chevron-right' }}
                                        />
                                
                                        <Input
                                        label="Branch Number"
                                            leftIcon={{ name: 'chevron-right' }}
                                        />
                         
                                        <Input
                                        label="Account Number"
                                            leftIcon={{ name: 'chevron-right' }}
                                        />

                                </View>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            </View>
        );
    }
}


export default DepositBank;