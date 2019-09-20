import React, { Component } from 'react';
import Slider from "react-slick";
import "./banner.scss";
import BannerSlide from '../BannerSlide';
class Banner extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: false,
            centerPadding: "30px",
            slidesToShow: 1,
            arrows: false,
            speed: 500
          };
        return (
        <section className="banner-section">
          <Slider {...settings}>
            <BannerSlide/>
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