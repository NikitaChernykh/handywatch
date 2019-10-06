import React, { Component } from 'react';
import Slider from "react-slick";
import "./banner.scss";
import BannerSlide from '../BannerSlide';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg className={className} onClick={onClick} style={{ ...style }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004"><path d="M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"/></svg>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg className={className} onClick={onClick} style={{ ...style,  transform: "rotate(180deg)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004"><path d="M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"/></svg>
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
        const isMobile = width <= 768;
        
        // Slider Settings
        const settings = {
            className: "center",
            centerMode: isMobile? true : false,
            infinite: isMobile? false : true,
            lazyLoad: 'ondemand',
            centerPadding: "30px",
            slidesToShow: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            autoplay: false,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            arrows: isMobile? false : true,
            dots: isMobile? true : false,
            speed: 500
          };
        return (
        <section className="banner-section">
          <Slider {...settings}>
            <BannerSlide
              title="Halloween is Here!"
              subtitle="Bundle"
              fullScreen={true}
              description="Your Fitbit watch needs new scary Clock Face."
              imageUrl={require('../../Images/Hallweeen-Babber-Website.png')}
              imageAlt="Holloween Bundle"
              url="https://k-pay.io/code/?s=21128EF3-D81C-C4A4-6B21-82C482CD1C6E&dsu=158823&p=1064-4204-981-1056-1087-1111"
              isMobile={isMobile}
            />
            <BannerSlide 
              title="Dark Ghost"
              subtitle="Clock Face"
              fullScreen={false}
              description="Ghost that lives in your watch."
              imageUrl={require('../../Images/Webp.net-gifmaker.gif')}
              imageAlt="Dark Ghost Clock Face"
              url="https://gallery.fitbit.com/details/997e00fe-788d-49d2-9ee3-de3887c027bb/openapp"
              isMobile={isMobile}
              />
            <BannerSlide 
              title="Get Them All"
              subtitle="Bundle"
              fullScreen={false}
              description="All 18 Clock Faces in one bundle!"
              imageUrl={require('../../Images/All-banner.png')}
              imageAlt="All in bundle"
              url="https://k-pay.io/code/?s=21128EF3-D81C-C4A4-6B21-82C482CD1C6E&dsu=158823&p=1721-1190-1023-1064-1427-2318"
              isMobile={isMobile}
              />
          </Slider>
        </section>
        );
    }
}

export default Banner;