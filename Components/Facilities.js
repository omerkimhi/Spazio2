import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Accordion, Card, FormCheck } from 'react-bootstrap';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

class Facilities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: []
        };
        this.handleFuel = this.handleFuel.bind(this);
        this.isChecked = this.isChecked.bind(this);
    }

    handleFuel(name, event) {
        let checkbox = event.target.checked;
        let nValues = _.clone(this.state.values);

        if (checkbox == true) {
            nValues.push(name);
            this.setState({ values: nValues }, this.props.getData(nValues, "Facilities") );
        }
        else {
            nValues.splice(nValues.indexOf(name), 1);
            this.setState({ values: nValues }, this.props.getData(nValues, "Facilities") );
        }

    }

    isChecked(name) {
        const { values } = this.state;
        let isChecked;
        const checkbox = values.find((c) => c.name === name);
        if (checkbox) isChecked = checkbox.active;
        return isChecked;
    }

    render() {

        const facilities = ["Parking", "Toilet", "Kitchen", "intercom", "Accessible", "Air Conditioning", "Wi-fi"];

        return (
            <View>
                <Accordion>
                    <Card style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Text style={{ color: 'black', fontSize: 22 }}>Facilities: </Text>
                            <Icon color='#595959'
                                size={30}
                                name='caret-down' />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>

                                {facilities.map((item, key) => <FormCheck
                                    key={item}
                                    label={item}
                                    onChange={(event) => this.handleFuel(item, event)}
                                    checked={this.isChecked(item)}
                                />)}
                                {/* <FormCheck label="Parking" onChange={(event) => this.handleFuel(name, event)}
                                    checked={this.isChecked(name)} />
                                <FormCheck label="Toilet" />
                                <FormCheck label="Kitchen" />
                                <FormCheck label="intercom" />
                                <FormCheck label="Accessible" />
                                <FormCheck label="Air Conditioning" />
                                <FormCheck label="Wi-fi" />
                                */}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            </View>
        );
    }
}



export default Facilities;