import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "ease",
  };
  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        <div className="slide-card">
          <div className="card">
            <h2>Heading</h2>
            <p>Hello</p>
            <p>World</p>
          </div>
        </div>
        <div className="slide-card">
          <div className="card">
            <h2>Heading</h2>
            <p>Hello</p>
            <p>World</p>
          </div>
        </div>
        <div className="slide-card">
          <div className="card">
            <h2>Heading</h2>
            <p>Hello</p>
            <p>World</p>
          </div>
        </div>
        <div className="slide-card">
          <div className="card">
            <h2>Heading</h2>
            <p>Hello</p>
            <p>World</p>
          </div>
        </div>
        <div className="slide-card">
          <div className="card">
            <h2>Heading</h2>
            <p>Hello</p>
            <p>World</p>
          </div>
        </div>
        <div className="slide-card">
          <div className="card">
            <h2>Heading</h2>
            <p>Hello</p>
            <p>World</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;
