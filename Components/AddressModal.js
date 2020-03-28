import React, { Component, useState } from "react";
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

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
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
                <Address />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="primary" onClick={props.onHide}>Save changes</Button>

            </Modal.Footer>
        </Modal>
    );
}


export default function AddressModal() {

    const [modalShow, setModalShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <ButtonToolbar>

                <ToggleButtonGroup type="radio" aria-label="Basic example" name="options" defaultValue={1}>
                    <ToggleButton variant="outline-secondary" value={1}>Near me</ToggleButton>
                    <ToggleButton variant="outline-secondary" value={2} onClick={() => setModalShow(true)}>By address</ToggleButton>

                </ToggleButtonGroup>

            </ButtonToolbar>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
