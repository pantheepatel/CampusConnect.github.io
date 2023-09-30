import React from "react";
import "./Carousel.css";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/4.jpg";
import img4 from "../../assets/1.jpg";
import { Link } from "react-router-dom";
const Carousel = () => {
  return (
    <>
      <div
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
      >
        <div
          id="myCarousel"
          class="carousel slide mb-6"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img2} className="d-block w-100" alt="First slide" />
              <div class="container">
                <div class="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p class="opacity-75">
                    Some representative placeholder content for the first slide
                    of the carousel.
                  </p>
                  <p>
                    <Link class="btn btn-lg btn-primary" to="profile">
                      Sign In today
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img3} className="d-block w-100" alt="Second slide" />
              <div class="container">
                <div class="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>
                    Some representative placeholder content for the second slide
                    of the carousel.
                  </p>
                  <p>
                    <Link class="btn btn-lg btn-primary" to='club'>
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img4} className="d-block w-100" alt="First slide" />
              <div class="container">
                <div class="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of this carousel.
                  </p>
                  <p>
                    {/* <a class="btn btn-lg btn-primary" href="#">
                      Browse gallery /{" "}
                    </a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
