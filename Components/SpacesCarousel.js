import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight ,FlatList} from 'react-native';
import { Carousel } from 'react-bootstrap';



class SpacesCarousel extends Component {




  render() {

    const PilatesStudio = require("../assets/Images/pilates studio.jpg");
    const barbershop = require("../assets/Images/barbershop.jpg");
    const artstudio = require("../assets/Images/artstudio.jpg");


    return (
      // {
      //   this.props.itemsInShop.map((item) =>
      //     <CCItem key={item.id} item={item} addToCart={this.props.addToCart} inCart={false} />
      //   )
      // }
      < View style={{ height: 200, width: 350 }}>

        <Carousel>
          {this.props.Spaces.map((item,index) =>

            <Carousel.Item>
              <TouchableHighlight  onPress={() => { this.props.navigation.navigate('SpacePage') }} underlayColor="white">
                <View  >
                  <img   
                    className="d-block w-100"
                    height='200'
                    src={item.image1}
                    alt="couldnt load photo"
                  />
                </View>
              </TouchableHighlight>
              <Carousel.Caption>

                <h3>{item.name}</h3>

              </Carousel.Caption>
            </Carousel.Item>

          )}

        </Carousel>
      </View >
    );
  }
}



export default SpacesCarousel;