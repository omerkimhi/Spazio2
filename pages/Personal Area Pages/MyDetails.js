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
import Icon from "react-native-vector-icons/FontAwesome";
import Register from "../Register.js";



class MyDetails extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
        this.state = {
            show: false,
            User: ""
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
        this.handleClose();
        this.child.current.saveChanges();
    }

    getSpacesAdded = (space, Avail, Fac, Eq) => {
        this.props.getSpacesAdded(space, Avail, Fac, Eq);
    }

    render() {
        // const spaceI = require('../assets/Images/SpaceIcon.png');



        return (
            <>
                <View onClick={this.handleShow}>
                    <View style={{ alignItems: 'center', width: 50, height: 50, borderRadius: 50 / 2, borderColor: '#056b60', borderWidth: 2 }}>
                        <Icon

                            name='user'
                            size={40}
                            color='#595959'
                        />
                    </View>
                    <Text>My details</Text>
                </View>


                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.user.fullName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Register user={this.props.user} fromPersonalArea={true} />
                        {/* <AddSpace ref={this.child} FieldsEquipment={this.props.FieldsEquipment} getSpacesAdded={this.getSpacesAdded} sendSpaceData={this.props.sendSpaceData} handleSendData={this.handleSendData} /> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
            </Button>
                        {/* <Button variant="primary" onClick={this.onClickChild}>
                            Save Changes
            </Button> */}
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default MyDetails;