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



class AddressModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            City: "",
            Street: "",
            Number: ""
        }
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
        this.props.getAddress(this.state.City, this.state.Street, this.state.Number)
        this.handleClose();
    };


    render() {


        return (
            <>
                <ButtonToolbar>

                    <ToggleButtonGroup type="radio" aria-label="Basic example" name="options" defaultValue={1}>
                        <ToggleButton variant="outline-secondary" value={1}>Near me</ToggleButton>
                        <ToggleButton variant="outline-secondary" value={2} onClick={this.handleShow}>By address</ToggleButton>

                    </ToggleButtonGroup>

                </ButtonToolbar>


                <Modal show={this.state.show} onHide={this.handleClose}

                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <Text>Address</Text>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Address sendData={this.getData} />
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