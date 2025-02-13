import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from "./SliderData";
const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };
  const sliderContainerStyle = {
    width: "100%",
    height: "450px",
    overflow: "hidden",
    marginBottom: "20px",
  };
  const slideStyle = {
    width: "100%",
    height: "100%",
  };
  const rowStyle = {
    backgroundColor: "#e6ecf5",
    height: "100%",
  };
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    padding: "60px"
  };
   const textContentStyle = { 
    width: "500px",
    textAlign: "left",
  };
  return (
    <div className="slider-container" style={sliderContainerStyle}>
      <Slider {...settings}>
        {SliderData.map((slide) => (
          <div key={slide.id} className="slide" style={slideStyle}>
            <div className="container" style={{ height: "100%" }}>
              <div className="row" style={rowStyle}>
                <div className="col-6 d-flex flex-column align-items-center justify-content-center text-center">
                  <h1 style={textContentStyle}>{slide.title}</h1>
                  <p className="fs-5" style={textContentStyle}>{slide.desc}</p>
                  <div className="fs-5" style={{ width: "400px", textAlign: "left" }}>
                    <button style={{ border: "none", marginTop: "10px", textAlign: "left" }}>
                      visit collections
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <img src={slide.cover} alt={slide.title} style={imageStyle} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div style={{ marginTop: "20px" }}>
        <p>Some content below the slider.</p>
      </div>
    </div>
  );
}
export default ImageSlider;