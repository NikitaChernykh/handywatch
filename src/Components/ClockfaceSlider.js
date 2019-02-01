import React, { Component } from "react";
import Slider from "react-slick";
import MyButton from "./MyButton";
import ClockColors from "./ClockColors";
import { gtmEvent } from "../Utils/utils";
import CrossfadeImage from "react-crossfade-image";
import {
  Versa1,
  Versa2,
  Versa3,
  Versa4,
  Versa5,
  Versa6,
  Versa7
} from "./Images";
import {
  Ionic1,
  Ionic2,
  Ionic3,
  Ionic4,
  Ionic5,
  Ionic6,
  Ionic7
} from "./Images";
export default class ClockfaceSlider extends Component {
  versaArray = [Versa1, Versa2, Versa3, Versa4, Versa5, Versa6, Versa7];
  ionicArray = [Ionic1, Ionic2, Ionic3, Ionic4, Ionic5, Ionic6, Ionic7];
  state = {
    versaColor: Versa1,
    ionicColor: Ionic1,
    isActive: true
  };

  goToSlide(type) {
    gtmEvent(
      "Clockface Slider",
      "Slide Change",
      type === 1
        ? "Slide to Ionic: " + this.props.name
        : "Slide to Versa: " + this.props.name
    );
    this.slider.slickGoTo(type);
    this.setState({
      isActive: !this.state.isActive
    });
  }
  componentDidMount() {
    this.selectRundomImage();
  }
  selectRundomImage() {
    this.setState({
      versaColor: this.versaArray[
        Math.floor(Math.random() * this.versaArray.length)
      ],
      ionicColor: this.ionicArray[
        Math.floor(Math.random() * this.ionicArray.length)
      ]
    });
  }

  onWatchChange(number, type) {
    if (type === "versa") {
      this.setState({
        versaColor: this.versaArray[number]
      });
    } else {
      this.setState({
        ionicColor: this.ionicArray[number]
      });
    }
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div className="clockface-over-image">
            <ClockColors
              type="clockcolors"
              watch="versa"
              color={this.state.versaColor}
              changeWatch={num => this.onWatchChange(num, "versa")}
            />
            <div className="clockface-over-image-1-container">
              <img src={this.props.versaImage} alt={this.props.name} />
            </div>
            <img
              src={this.state.versaColor}
              alt={this.props.name + " for Versa"}
            />
          </div>
          <div>
            <ClockColors
              type="clockcolors-ionic"
              watch="ionic"
              color={this.state.ionicColor}
              changeWatch={num => this.onWatchChange(num, "ionic")}
            />
            <div className="clockface-over-image-2-container">
              <img src={this.props.ionicImage} alt={this.props.name} />
            </div>

            <img
              className="watch-image"
              src={this.state.ionicColor}
              alt={this.props.name + " for Versa"}
            />
          </div>
        </Slider>
        <div className="clockface-type">
          <MyButton
            className={
              this.state.isActive
                ? "clock-button clock-button--active"
                : "clock-button"
            }
            onClick={() => this.goToSlide(0)}
          >
            VERSA
          </MyButton>

          <MyButton
            className={
              !this.state.isActive
                ? "clock-button clock-button--active"
                : "clock-button"
            }
            onClick={() => this.goToSlide(1)}
          >
            IONIC
          </MyButton>
        </div>
      </div>
    );
  }
}
