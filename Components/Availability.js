import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Accordion, Card, Table } from 'react-bootstrap';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

class Availability extends Component {
    render() {
        return (
            <View>
                <Accordion>
                    <Card style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Text style={{ color: 'white', fontSize: 22 }}>Availability: </Text>
                            <Icon color='#595959'
                                size='50'
                                name='caret-down' />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Table hover size="sm" style={{textAlign: "center"}}>
                                    <thead >
                                        <tr>
                                            <th>Day</th>
                                            <th>From</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Sunday</td>
                                            <td >
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Input label='from'
                                                        containerStyle={{ width: 80 }}
                                                        placeholder='HH:MM'
                                                    />
                                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 40 }}> - </Text>
                                                    <Input label='to'
                                                        containerStyle={{ width: 80 }}
                                                        placeholder='HH:MM'
                                                    />
                                                </View>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Monday</td>
                                            <td >
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Input label='from'
                                                        containerStyle={{ width: 80 }}
                                                        placeholder='HH:MM'
                                                    />
                                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 40 }}> - </Text>
                                                    <Input label='to'
                                                        containerStyle={{ width: 80 }}
                                                        placeholder='HH:MM'
                                                    />
                                                </View>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>Tuesday</td>
                                            <td >
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Input label='from'
                                                        containerStyle={{ width: 80 }}
                                                        placeholder='HH:MM'
                                                    />
                                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 40 }}> - </Text>
                                                    <Input label='to'
                                                        containerStyle={{ width: 80 }}
                                                        placeholder='HH:MM'
                                                    />
                                                </View>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Wednesday</td>
                                            <td >
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Input label='from'
                                                        containerStyle={{ width: 80 }}
                                                        placeholder='HH:MM'
                                                    />
                                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 40 }}> - </Text>
                                                    <Input label='to'
                                                        containerStyle={{ width: 80 }}
                                                        placeholder='HH:MM'
                                                    />
                                                </View>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Thursday</td>
                                            <td >
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Input label='from'
                                                        containerStyle={{ width: 80 }}
                                                        placeholder='HH:MM'
                                                    />
                                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 40 }}> - </Text>
                                                    <Input label='to'
                                                        containerStyle={{ width: 80 }}
                                                        placeholder='HH:MM'
                                                    />
                                                </View>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Friday</td>
                                            <td >
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Input label='from'
                                                        containerStyle={{ width: 80 }}
                                                        placeholder='HH:MM'
                                                    />
                                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 40 }}> - </Text>
                                                    <Input label='to'
                                                        containerStyle={{ width: 80 }}
                                                        placeholder='HH:MM'
                                                    />
                                                </View>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Saturday</td>
                                            <td >
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Input label='from'
                                                        containerStyle={{ width: 80 }}
                                                        placeholder='HH:MM'
                                                    />
                                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 40 }}> - </Text>
                                                    <Input label='to'
                                                        containerStyle={{ width: 80 }}
                                                        placeholder='HH:MM'
                                                    />
                                                </View>
                                            </td>
                                        </tr>
                                    </tbody>

                                </Table>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            </View>
        );
    }
}

Availability.propTypes = {

};

export default Availability;