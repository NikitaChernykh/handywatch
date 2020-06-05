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
    
    render() {
        // Slider Settings
        const settings = {
            className: "center",
            centerMode: this.props.isMobile? true : false,
            infinite: true,
            lazyLoad: 'ondemand',
            centerPadding: "30px",
            slidesToShow: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            arrows: this.props.isMobile? false : true,
            dots: this.props.isMobile? true : false,
            speed: 500
          };
        return (
        <section className="banner-section">
          <Slider {...settings}>
          {/* <BannerSlide 
              title="Valentine's Day Exclusive"
              subtitle="Bundle"
              fullScreen={false}
              description="Includes One Love and Days Together App"
              imageUrl={require('../../Images/Love-Bundle-min.png')}
              buttonText="DOWNLOAD NOW"
              imageAlt="Love bundle"
              url="https://k-pay.io/code/?s=21128EF3-D81C-C4A4-6B21-82C482CD1C6E&dsu=158823&p=7405"
              isMobile={this.props.isMobile}
              /> */}
          {/* <BannerSlide
              title="One Love"
              subtitle="Clock Face"
              fullScreen={true}
              description="Beautiful Clock Face for Valentine's Day"
              imageUrl={require('../../Images/One-Love-min.png')}
              buttonText="DOWNLOAD NOW"
              imageAlt="One love clock face"
              url="https://handy.watch/details/-LEmaPHWXzdUZ_5ohJjj"
              isMobile={this.props.isMobile}
            /> */}
            <BannerSlide 
              title="Pride Update"
              subtitle="Days Together App"
              fullScreen={false}
              description="Update your 'Days Togehter' if you alrady own it!"
              imageUrl={require('../../Images/pride.png')}
              buttonText="More Details"
              imageAlt="days together fitbit app"
              url="https://gallery.fitbit.com/details/8abf3e53-2a34-4cce-b45c-2542615f9762"
              isMobile={this.props.isMobile}
              />
            <BannerSlide
              title="Mr. Giraffe"
              subtitle="Clock Face"
              fullScreen={true}
              description="New Cute Addition to Mr. Family Bundle"
              imageUrl={require('../../Images/gir.png')}
              buttonText="DOWNLOAD NOW"
              imageAlt="Mr. Giraffe Clock Gace"
              url="https://gallery.fitbit.com/details/e7cf2216-f5ad-4749-839c-99bd13947cd9"
              isMobile={this.props.isMobile}
            />
            <BannerSlide 
              title="Days Together"
              subtitle="App"
              fullScreen={false}
              description="Count how long you are together!"
              imageUrl={require('../../Images/Days-Together-min.png')}
              buttonText="DOWNLOAD NOW"
              imageAlt="days together fitbit app"
              url="https://handy.watch/details/LEmaPHHgI3SgqTKu9f9"
              isMobile={this.props.isMobile}
              />
            <BannerSlide 
              title="Get Them All"
              subtitle="Bundle"
              fullScreen={false}
              description="All 20 Clock Faces in one bundle!"
              imageUrl={require('../../Images/All-banner.png')}
              imageAlt="All in bundle"
              buttonText="DOWNLOAD NOW"
              url="https://k-pay.io/code/?s=21128EF3-D81C-C4A4-6B21-82C482CD1C6E&dsu=158823&p=2318-1064-1413-1023-1721"
              isMobile={this.props.isMobile}
              />
          </Slider>
        </section>
        );
    }
}

export default Banner;