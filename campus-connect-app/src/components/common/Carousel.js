import React from "react";
// import "./Carousel.css";
import Img1 from "../../assets/1.jpg";
import Img2 from "../../assets/2.jpg";
import Img3 from "../../assets/3.jpg";
import { Link } from "react-router-dom";
import { Carousel, Button } from 'react-bootstrap';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Carousels = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={500}>
          <img src={Img1} alt="image1" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Link to='club'>
          <img src={Img2} alt="image2" />
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Link to='profile'>
            <img src={Img3} alt="image3" /></Link>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousels;
