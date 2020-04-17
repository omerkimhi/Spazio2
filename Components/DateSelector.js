import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class DateSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {

    this.setState({
      selectedStartDate: date,
    }, () => this.props.checkAvailability(this.state.selectedStartDate));
  }

  

  render() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    return (
      <View style={{ backgroundColor: '#FFFFFF', flex: 1, }}>
        <CalendarPicker
          selectedDayColor={"#056b60"}
          onDateChange={this.onDateChange}
          minDate={new Date()}
        />

        {/* <View style={{ left: '2%' }}>
          <Text>SELECTED DATE:{startDate}</Text>
        </View> */}
      </View>
    );
  }
}

