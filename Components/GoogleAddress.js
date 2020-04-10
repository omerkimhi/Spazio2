/* import React, { Component } from 'react'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import scriptLoader from 'react-async-script-loader';




class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
        if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
            if (isScriptLoadSucceed) {
                this.initEditor()
            }
            else this.props.onError()
        }
    }

    componentDidMount() {
        const { isScriptLoaded, isScriptLoadSucceed } = this.props
        if (isScriptLoaded && isScriptLoadSucceed) {
            this.initEditor()
        }
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default scriptLoader('https://maps.googleapis.com/maps/api/js?key=AIzaSyDGnQQ9ohEKAWenIdGmz5qzzaoj3tcvq2k&libraries=places')(LocationSearchInput); */



/*import React from 'react';
import scriptLoader from 'react-async-script-loader';

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
    }

    componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
        if (isScriptLoaded && !this.props.isScriptLoaded) {
            // load finished
            if (isScriptLoadSucceed) {
                this.map = new google.maps.Map(this.refs.map, {
                    center: { lat: 10.794234, lng: 106.706541 },
                    zoom: 20
                });

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        position => {
                            const pos = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            };

                            this.map.setCenter(pos);

                            const marker = new google.maps.Marker({
                                position: pos,
                                map: this.map,
                                title: 'Hello World!'
                            });
                        },
                        () => {
                            console.log('navigator disabled');
                        }
                    );
                } else {
                    // Browser doesn't support Geolocation
                    console.log('navigator disabled');
                }
            } else this.props.onError();
        }
    }

    render() {
        return (
            <div>
                <div ref="map" style={{ height: '80%', width: '100%' }}></div>
                {!this.map && <div className="center-md">Loading...</div>}
            </div>
        );
    }
}

export default scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyDGnQQ9ohEKAWenIdGmz5qzzaoj3tcvq2k'])(LocationSearchInput); */