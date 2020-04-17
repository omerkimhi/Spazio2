import React, { Component, useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableHighlight
} from "react-native";
import { ToggleButton, ToggleButtonGroup, ButtonToolbar, Button, Modal } from 'react-bootstrap';
import Address from './Address.js';
import LocationSearchInput from './GoogleAddress.js';
import DateSelector from './DateSelector';


class AddressModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            dateSelected: "",
            hoursOfDaySelected: "",
            availa: this.props.Availablities,

        }
    }

    componentDidMount = () => {

        // this.setState({

        //     availa: this.props.Availablities
        // }, () => { console.log("availa: ", this.state.availa) })

    }


    setShow = (status) => {
        this.setState({
            show: status
        });
    }

    handleClose = () => this.setShow(false);
    handleShow = () => this.setShow(true);

    getData = (stateName, value) => {

        this.setState({
            [stateName]: value
        })
    }

    saveChanges = () => {
        this.props.getDayOfDateSelected(this.state.dateSelected)
        this.handleClose();
    };

    checkAvailability = (day) => {

        this.setState({
            dateSelected: day.format("dddd").toLowerCase()
        }, () => console.log("date selected: ", this.state.dateSelected));

        // this.state.availa.map((item) => {
        //     let itemDay = item.Day.charAt(0).toUpperCase() + item.Day.slice(1);
        //     if (itemDay == day.format('dddd')) {
        //         this.setState({
        //             hoursOfDaySelected: item.val
        //         }, () => console.log("hours ", this.state.hoursOfDaySelected))

        //     }
        // })
    }


    render() {


        return (
            <>
                <ButtonToolbar>

                    <ToggleButtonGroup type="radio" aria-label="Basic example" name="options" defaultValue={1}>
                        <ToggleButton variant="outline-secondary" value={1}>Today</ToggleButton>
                        <ToggleButton variant="outline-secondary" value={2} onClick={this.handleShow}>By date</ToggleButton>

                    </ToggleButtonGroup>

                </ButtonToolbar>


                <Modal show={this.state.show} onHide={this.handleClose}

                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <Text>Pick a date</Text>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DateSelector checkAvailability={this.checkAvailability} Search={true} />
                        {/* <Address sendData={this.getData} /> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                        <Button variant="primary" onClick={this.saveChanges}>Save changes</Button>

                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
export default AddressModal;