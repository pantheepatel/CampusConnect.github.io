import "./hello.css";
import React from "react";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.webp";
import Carousel from "./Carousel";
import Card from "./Card";
import './market.css'
import CardC from "./CardC";
function Hello() {
  return (
    <div>
      <Carousel />
      <CardC />
    </div>
  );
}
export default Hello;
