import React, { Component, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableHighlight
} from "react-native";
import { Button, Modal } from 'react-bootstrap';
import AddSpace from '../pages/AddSpace.js'

export default function AddSpaceModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const spaceI = require('../assets/Images/SpaceIcon.png');

    return (
        <>
            <View style={{ alignItems: 'center'}} onClick={handleShow}>
                <Image source={spaceI} style={{ width: 70, height: 70 }} />
                <Text style={{ color: '#595959', fontSize: 18 }}>Add a space</Text>
            </View>
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Space</Modal.Title>
                </Modal.Header>
                <Modal.Body><AddSpace /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
