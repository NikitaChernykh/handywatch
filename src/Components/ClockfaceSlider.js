import React, { Component } from "react";
import Slider from "react-slick";
import MyButton from "./MyButton";
export default class ClockfaceSlider extends Component {
  state = {
    slideIndex: 0,
    updateCount: 0
  };
  goToSlide(type) {
    console.log(this.state.slideIndex);
    if ("versa") {
      this.slider.slickGoTo(0);
      console.log(this.slider);
    } else {
      this.slider.slickGoTo(1);
    }
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      afterChange: () =>
        this.setState(state => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next })
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
          <MyButton
            className="clock-button"
            onClick={() => this.goToSlide("versa")}
          >
            VERSA
          </MyButton>
          <MyButton
            className="clock-button"
            onClick={() => this.goToSlide("ionic")}
          >
            IONIC
          </MyButton>
        </div>
      </div>
    );
  }
}
