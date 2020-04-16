import React, { Component, useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableHighlight,
    RefreshControl
} from "react-native";
import { Button, Modal } from 'react-bootstrap';
import AddSpace from '../pages/AddSpace.js'

import Space from "../Classes/Space";



class AddSpaceModal extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
        this.state = {
            show: false
        };
    }




    handleSendData = (data) => {
        this.props.sendSpaceData(data);
    }

    setShow = (status) => {
        this.setState({
            show: status
        });
    }

    handleClose = () => this.setShow(false);
    handleShow = () => this.setShow(true);

    onClickChild = () => {
        this.child.current.saveChanges();
    }

    getSpacesAdded = (space, Avail, Fac, Eq) => {
        this.props.getSpacesAdded(space, Avail, Fac, Eq);
    }

    render() {
        const spaceI = require('../assets/Images/SpaceIcon.png');



        return (
            <>
                <View style={{ alignItems: 'center' }} onClick={this.handleShow}>
                    <Image source={spaceI} style={{ width: 70, height: 70 }} />
                    <Text style={{ color: '#595959', fontSize: 18 }}>Add a space</Text>
                </View>


                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Space</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddSpace ref={this.child} FieldsEquipment={this.props.FieldsEquipment} getSpacesAdded={this.getSpacesAdded} sendSpaceData={this.props.sendSpaceData} handleSendData={this.handleSendData} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
            </Button>
                        <Button variant="primary" onClick={this.onClickChild}>
                            Save Changes
            </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default AddSpaceModal;