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


class NextOrderSpaceModal extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
        this.state = {
            show: false,
            Space: ""
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

    whatButton = () => {
        return (
            <View onClick={this.handleShow}>
                <Text style={{ fontSize: 18, color: '#056b60', fontWeight: '500' }}>{this.props.SpaceOrder[0].name}</Text>
            </View>
        )
    }

    whatToShow = (ord, spa) => {
        return (
            <View style={{ left: '2%', top: '5%', }}>
                <Text style={{ fontSize: 24, alignSelf: 'center', color: "#056b60", fontWeight: '600' }}>{spa.name}</Text>
                <View style={{ top: '3%', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: "#056b60" }}>Order date: </Text>
                    <Text style={{ fontSize: 16 }}>{ord.reservationDate}</Text>
                </View>
                <View style={{ top: '3%', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: "#056b60" }}>Order time: </Text>
                    <Text style={{ fontSize: 16 }}>{ord.startHour} - {ord.endHour}</Text>
                </View>
                <View style={{ top: '3%', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: "#056b60" }}>Price: </Text>
                    <Text style={{ fontSize: 16 }}>{ord.price}</Text>
                </View>
            </View>)
    }

    render() {

        var what;
        var but;
        console.log(this.props.SpaceOrder[2], this.props.SpaceOrder[3])
        if (this.props.next) {
            if (this.props.SpaceOrder[0] == 0) {
                but = (<Text style={{ alignSelf: 'center', fontWeight: '400', fontStyle: 'italic' }}>No Orders Yet</Text>)
            }
            else {
                what = this.whatToShow(this.props.SpaceOrder[1], this.props.SpaceOrder[0])
                but = this.whatButton();
            }
        }
        else {
            but = (<View onClick={this.handleShow}>
                <View style={{ alignItems: 'center', width: 50, height: 50, borderRadius: 50 / 2, borderColor: '#056b60', borderWidth: 2 }}>
                    <Icon

                        name='calendar-check-o'
                        size={35}
                        color='#595959'
                    />
                </View>
                <Text>My orders</Text>
            </View>)


            if (this.props.SpaceOrder[2].length == 0) { what = (<Text>No Orders Yet</Text>) }
            else {
                what = [];
                let orders = this.props.SpaceOrder[2];
                let spaces = this.props.SpaceOrder[3];
                for (let j = 0; j < orders.length; j++) {
                    for (let k = 0; k < spaces.length; k++) {
                        if (orders[j].spaceId == spaces[k].spaceId) {
                            what.push(this.whatToShow(orders[j], spaces[k]))
                        }
                    }
                }

            }
        }
        return (
            <>

                {but}

                <Modal show={this.state.show} onHide={this.handleClose}>

                    <Modal.Body>

                        <View>
                            {what}
                        </View>
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

export default NextOrderSpaceModal;