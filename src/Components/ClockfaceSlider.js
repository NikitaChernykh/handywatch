import React, { Component } from "react";
import Slider from "react-slick";
import MyButton from "./MyButton";
import { gtmEvent } from "../Utils/utils";
export default class ClockfaceSlider extends Component {
  goToSlide(type) {
    gtmEvent(
      "Clockface Slider",
      "Slide Change",
      type === 1 ? "Ionic: " + this.props.name : "Versa: " + this.props.name
    );
    this.slider.slickGoTo(type);
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true
    };
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <img src={this.props.versaImage} alt="" />
          </div>
          <div>
            <img src={this.props.ionicImage} alt="" />
          </div>
        </Slider>
        <div className="clockface-type">
          <MyButton className="clock-button" onClick={() => this.goToSlide(0)}>
            VERSA
          </MyButton>

          <MyButton className="clock-button" onClick={() => this.goToSlide(1)}>
            IONIC
          </MyButton>
        </div>
      </div>
    );
  }
}
