import React, { Component } from 'react';
import Slider from "react-slick";
import "./banner.scss";
import BannerSlide from '../BannerSlide';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
class Banner extends Component {
    constructor() {
      super();
      this.state = {
        width: window.innerWidth,
      };
    }
    componentWillMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
      this.setState({ width: window.innerWidth });
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;
        
        // Slider Settings
        const settings = {
            className: "center",
            centerMode: isMobile? true : false,
            infinite: false,
            centerPadding: "30px",
            slidesToShow: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            arrows: isMobile? false : true,
            dots: isMobile? true : false,
            speed: 500
          };
        return (
        <section className="banner-section">
          <Slider {...settings}>
            <BannerSlide title="Fitbit Clock Faces" subtitle="subtitle text"/>
            <BannerSlide/>
            <BannerSlide/>
            <BannerSlide/>
            <BannerSlide/>
            <BannerSlide/>
          </Slider>
        </section>
        );
    }
}

export default Banner;