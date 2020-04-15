import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import TimePicker from "react-native-24h-timepicker";
import TimeRangeSlider from 'react-time-range-slider';
class TimeSelector extends Component {
    constructor(props) {
        super(props);
        this.featureRef = React.createRef();
        this.changeStartHandler = this.changeStartHandler.bind(this);
        this.timeChangeHandler = this.timeChangeHandler.bind(this);
        this.changeCompleteHandler = this.changeCompleteHandler.bind(this);
        this.state = {
            value: {
                start: "00:00",
                end: "23:59",

            }
        }
    }


    changeStartHandler(time) {
        console.log("Start Handler Called", time);
    }

    timeChangeHandler(time) {
        this.setState({
            value: time
        }, this.props.timeSelectedChanged(this.state.value));
    }

    changeCompleteHandler(time) {
        console.log("Complete Handler Called", time);
    }


    render() {
        let min = "00:00";
        let max = "23:59";
        if (this.props.hoursOfDaySelected != "") {
            min = this.props.hoursOfDaySelected.substring(0, 5);
            max = this.props.hoursOfDaySelected.substring(6, 11);
            console.log(min, max)
        }


        return (
            <View  >

                <View style={{ width: 300 }}>
                    <Text>Start Time: {this.state.value.start} End Time: {this.state.value.end}</Text></View>
                <TimeRangeSlider
                    disabled={false}
                    draggableTrack={true}
                    maxValue={max}
                    minValue={min}
                    name={"ashvin"}
                    onChangeStart={this.changeStartHandler}
                    onChangeComplete={this.changeCompleteHandler}
                    onChange={this.timeChangeHandler}
                    step={60}
                    value={this.state.value} />

            </View>
        );
    }
}


export default TimeSelector;