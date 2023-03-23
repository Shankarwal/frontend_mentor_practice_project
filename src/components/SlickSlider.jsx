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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
