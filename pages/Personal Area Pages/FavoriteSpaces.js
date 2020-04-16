import React, { Component } from 'react';
import { TouchableOpacity, Platform, StyleSheet, View, Button, Text, ScrollView, Image, TouchableHighlight } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import MasonryList from "react-native-masonry-list";


export default class FavoriteSpaces extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: []
        };
    }

    componentDidMount = () => {
        let data = [];

        this.props.Spaces.map((space) => {
            data.push({
                URI: space.image1,
                name: space.name,
                price: space.price,
                city: space.city,
                street: space.street,
                number: space.number,
                Space: space
            })
        });
        this.setState({ listData: data })
    }

    // closeRow = (rowMap, rowKey) => {
    //     if (rowMap[rowKey]) {
    //         rowMap[rowKey].closeRow();
    //     }
    // };

    // deleteRow = (rowMap, rowKey) => {
    //     this.closeRow(rowMap, rowKey);
    //     const newData = this.state.listData;
    //     const prevIndex = this.state.listData.findIndex(item => item.key === rowKey);
    //     newData.splice(prevIndex, 1);
    //     this.setState({
    //         listData: (newData)
    //     }, console.log(this.state.listData));
    // }

    // onRowDidOpen = rowKey => {
    //     console.log('This row opened', rowKey);
    // };

    // renderItem = data => (
    //     <TouchableHighlight
    //         onPress={() => console.log('You touched me')}
    //         style={styles.rowFront}
    //         underlayColor={'#AAA'}
    //     >
    //         <View>
    //             <Text>I am {data.item.text} in a SwipeListView</Text>
    //         </View>
    //     </TouchableHighlight>
    // );


    // renderHiddenItem = (data, rowMap) => (
    //     <View style={styles.rowBack}>
    //         <Text>Left</Text>
    //         <TouchableOpacity
    //             style={[styles.backRightBtn, styles.backRightBtnLeft]}
    //             onPress={() => this.closeRow(rowMap, data.item.key)}
    //         >
    //             <Text style={styles.backTextWhite}>Close</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //             style={[styles.backRightBtn, styles.backRightBtnRight]}
    //             onPress={() => this.deleteRow(rowMap, data.item.key)}
    //         >
    //             <Text style={styles.backTextWhite}>Delete</Text>
    //         </TouchableOpacity>
    //     </View>
    // );

    setHeader = (space) => {
        return (
            <View style={{ justifyContent: 'space-around', flexDirection: 'row', }}>
                <Text>{space.price} NIS/hr      </Text>
                {/* <TouchableHighlight onPress={() => { this.props.navigation.navigate('SpacePage', { Space: space.Space }) }} > */}
                <Text style={{ alignSelf: 'center', fontWeight: '500', fontSize: 18 }}>{space.name}</Text>
                {/* </TouchableHighlight> */}
                <Text style={{}}>  {space.street} {space.number}, {space.city}</Text>
            </View>
        )
    }



    render() {



        console.log("Favorite spaces: ", this.props.Spaces);

        if (this.state.listData.length == 0) {
            return (<Text>loading..</Text>)
        }
        else {
            console.log("listdata: ", this.state.listData)
            return (
                <MasonryList
                    images={this.state.listData}
                    renderIndividualHeader={(space) => this.setHeader(space)}
                    renderIndividualFooter={(space) => <View style={{ borderBottomColor: '#056b60', borderBottomWidth: 2, paddingBottom: '2%', marginBottom: '2%' }}></View>}
                    columns={1}
                    spacing={3}
                />

                // <View style={styles.container}>
                //     <SwipeListView
                //         data={this.state.listData}
                //         renderItem={this.renderItem}
                //         renderHiddenItem={this.renderHiddenItem}
                //         leftOpenValue={75}
                //         rightOpenValue={-150}
                //         previewRowKey={'0'}
                //         previewOpenValue={-40}
                //         previewOpenDelay={3000}
                //         onRowDidOpen={this.onRowDidOpen}
                //     />
                // </View>
            );
        }
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});



