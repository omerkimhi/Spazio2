import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
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
          {this.props.Spaces.map((item) =>

            <Carousel.Item>
              <img
                className="d-block w-100"
                height='200'
                src={item.image1}
                alt="couldnt load photo"
              />
              <Carousel.Caption>
                <h3>{item.name}</h3>

              </Carousel.Caption>
            </Carousel.Item>

          )}
          {/* <Carousel.Item>
            
            <img
              className="d-block w-100"
              height='200'
              src={PilatesStudio}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>first slide label</h3>
              <p>first slide description</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height='200'
              src={barbershop}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>second slide label</h3>
              <p>second slide description</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height='200'
              src={artstudio}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>third slide label</h3>
              <p>third slide description</p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </View >
    );
  }
}



export default SpacesCarousel;