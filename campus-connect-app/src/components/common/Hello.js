import "./hello.css";
import React from "react";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.webp";
import Carousel from "./Carousel";
import Card from "./Card";

function Hello() {
  return (
    <div>
      <Carousel />
      {/* <Card /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="text">
            <h2>Specialty Clubs</h2>
            <p>
              Specialty clubs offer a great way to bring students together from
              one or multiple schools from one community to come togetherto
              serve. Some students form specialty clubs to provide service that
              aligns with their shared academic field of study, like medical
              program students offering healthcare support in their communities.
              Alumni of Campus Lions clubs can stay connected by forming
              life-stage Specialty clubs. Graduating members are able to easily
              transition from the Student Membership Program to traditional
              Lions membership, continue their connection with their school
              community, and network with other professionals while further
              developing their leadership skills. Learn more about specialty
              clubs by visiting the Specialty Lions clubs webpage.
            </p>
          </div>
          <div className="image">
            <img src={img3} alt="people" />
          </div>
         
        </div>
        <div className="row">
          <div className="image1">
            <img src={img2} alt="people" />
          </div>
          <div className="text">
            <h2>Club Options</h2>
            <p>
              If a school does not approve your chartered club, consider
              chartering a Campus Lions club that operates independently from
              the school. In this case, the Campus Lions club is not obliged to
              adhere to the school's approved registered student club policies.
              However, this may also limit or preclude receiving endorsement
              benefits of using the school's proper name for the club, approval
              to plan and hold service activities on campus, apply for funding
              and participate in school sponsored events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hello;
