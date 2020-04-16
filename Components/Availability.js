import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Accordion, Card, Table } from 'react-bootstrap';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


import Availabillity from "../Classes/Availabillity";


class Availability extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Availability: {
                "sunday": { "start": "00", "end": "00" },
                "monday": { "start": "00", "end": "00" },
                "tuesday": { "start": "00", "end": "00" },
                "wednesday": { "start": "00", "end": "00" },
                "thursday": { "start": "00", "end": "00" },
                "friday": { "start": "00", "end": "00" },
                "saturday": { "start": "00", "end": "00" },
            }

        }
    }

    onChangeValue = (value, name, when) => {

        let TempArray = this.state.Availability;
        TempArray[name][when] = value;

        this.setState({
            Availability: TempArray
        }, () => {
            let Availa = new Availabillity(0,
                `${this.state.Availability["sunday"]["start"]}-${this.state.Availability["sunday"]["end"]}`,
                `${this.state.Availability["monday"]["start"]}-${this.state.Availability["monday"]["end"]}`,
                `${this.state.Availability["tuesday"]["start"]}-${this.state.Availability["tuesday"]["end"]}`,
                `${this.state.Availability["wednesday"]["start"]}-${this.state.Availability["wednesday"]["end"]}`,
                `${this.state.Availability["thursday"]["start"]}-${this.state.Availability["thursday"]["end"]}`,
                `${this.state.Availability["friday"]["start"]}-${this.state.Availability["friday"]["end"]}`,
                `${this.state.Availability["saturday"]["start"]}-${this.state.Availability["saturday"]["end"]}`,
                0);

            this.props.getAvailability(Availa)
        })

    }

    render() {

        return (
            <View>

                <Accordion>
                    <Card style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Text style={{ color: 'black', fontSize: 22 }}>Availability: </Text>
                            <Icon color='#595959'
                                size={30}
                                name='caret-down' />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Table hover size="sm" style={{ textAlign: "center" }}>
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
                                                <View style={{ flexDirection: 'row', }}>
                                                    <Input label='from'
                                                        containerStyle={{ width: 80 }}
                                                        inputStyle={{ width: 40 }}
                                                        placeholder='00:00'
                                                        onChangeText={e => this.onChangeValue(e, "sunday", "start")}
                                                    />
                                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 40 }}> - </Text>
                                                    <Input label='to'
                                                        containerStyle={{ width: 80 }}
                                                        inputStyle={{ width: 40 }}
                                                        placeholder='00:00'
                                                        onChangeText={e => this.onChangeValue(e, "sunday", "end")}
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
                                                        inputStyle={{ width: 40 }}
                                                        placeholder='00:00'
                                                        onChangeText={e => this.onChangeValue(e, "monday", "start")}
                                                    />
                                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 40 }}> - </Text>
                                                    <Input label='to'
                                                        containerStyle={{ width: 80 }}
                                                        inputStyle={{ width: 40 }}
                                                        placeholder='00:00'
                                                        onChangeText={e => this.onChangeValue(e, "monday", "end")}
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
                                                        inputStyle={{ width: 40 }}
                                                        placeholder='00:00'
                                                        onChangeText={e => this.onChangeValue(e, "tuesday", "start")}
                                                    />
                                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 40 }}> - </Text>
                                                    <Input label='to'
                                                        containerStyle={{ width: 80 }}
                                                        inputStyle={{ width: 40 }}
                                                        placeholder='00:00'
                                                        onChangeText={e => this.onChangeValue(e, "tuesday", "end")}
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
                                                        inputStyle={{ width: 40 }}
                                                        placeholder='00:00'
                                                        onChangeText={e => this.onChangeValue(e, "wednesday", "start")}
                                                    />
                                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 40 }}> - </Text>
                                                    <Input label='to'
                                                        containerStyle={{ width: 80 }}
                                                        inputStyle={{ width: 40 }}
                                                        placeholder='00:00'
                                                        onChangeText={e => this.onChangeValue(e, "wednesday", "end")}
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
                                                        inputStyle={{ width: 40 }}
                                                        placeholder='00:00'
                                                        onChangeText={e => this.onChangeValue(e, "thursday", "start")}
                                                    />
                                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 40 }}> - </Text>
                                                    <Input label='to'
                                                        containerStyle={{ width: 80 }}
                                                        inputStyle={{ width: 40 }}
                                                        placeholder='00:00'
                                                        onChangeText={e => this.onChangeValue(e, "thursday", "end")}
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
                                                        inputStyle={{ width: 40 }}
                                                        placeholder='00:00'
                                                        onChangeText={e => this.onChangeValue(e, "friday", "start")}
                                                    />
                                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 40 }}> - </Text>
                                                    <Input label='to'
                                                        containerStyle={{ width: 80 }}
                                                        inputStyle={{ width: 40 }}
                                                        placeholder='00:00'
                                                        onChangeText={e => this.onChangeValue(e, "friday", "end")}
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
                                                        inputStyle={{ width: 40 }}
                                                        placeholder='00:00'
                                                        onChangeText={e => this.onChangeValue(e, "saturday", "end")}
                                                    />
                                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 40 }}> - </Text>
                                                    <Input label='to'
                                                        containerStyle={{ width: 80 }}
                                                        inputStyle={{ width: 40 }}
                                                        placeholder='00:00'
                                                        onChangeText={e => this.onChangeValue(e, "saturday", "end")}
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