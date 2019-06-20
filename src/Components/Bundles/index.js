import React, { Component } from 'react';
import Slider from "react-slick";
import {firebaseBundles} from "../../firebase";
import { firebaseLooper} from "../../Utils/utils";
import ReactResizeDetector from 'react-resize-detector';
import { isMobile } from "react-device-detect";
import Zoom from 'react-reveal/Zoom';
import { gtmEvent } from "../../Utils/utils";
import MyLink from "../MyLink";

import "./bundles.css";
import Steps from '../StepsComponent';
import Navigation from '../Navigation';
class Bundle extends Component {
    state ={
        loading: true,
        width: 0,
        bundles: [],
        mobileURLBanner: "https://firebasestorage.googleapis.com/v0/b/handywatch-01.appspot.com/o/bundle1-mobile.jpg?alt=media&token=a4ba514a-4b03-419f-8c39-37bc87ead5bc",
        desktopURLBanner: "https://firebasestorage.googleapis.com/v0/b/handywatch-01.appspot.com/o/bundle1.jpg?alt=media&token=6981cdd4-23e8-490b-a4da-ba71535652eb"
    }
    
    componentDidMount(){
        firebaseBundles.once("value").then(snapshot => {
            const bundles = firebaseLooper(snapshot);
            this.setState({
                bundles: bundles,
                loading: false
            });
        });
        this.getBannerUrls()
    }
    getBannerUrls(){
        // TODO this.state.bundles
        
    }
    onResize = (width) => {
        this.setState({
            width: width
        });
    }
    displayClockfaces= bundle => bundle
      ? bundle.clockfaces.map((clockface,index)=> (
        <div key={index} className="includes-clockface-container" >
        {console.log(clockface)}
            <img className="includes-clockface-img" alt="" src={clockface}/>
        </div>
        ))
      : (null);
    
      
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 10,
            slidesToScroll: 1,
            initialSlide: 2,
            className: 'slides',
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  className: 'slides'
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  initialSlide: 1,
                  className: 'slides'
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: false,
                  className: 'slides'
                }
              }
            ]
          };
        if (this.state.loading) {
            return <div>Loading...</div>;
        } else {
            return (  
                <div className="wrapper bundles" >

                    <ReactResizeDetector handleWidth  onResize={this.onResize} />
                    <Navigation selectedBundles="selected"/>
                    <Zoom bottom  duration={2000}>
                    <section>
                        <div className="bundles-banner">
                            <img className="banner-image" alt="" src={isMobile || this.state.width < 450 ? this.state.mobileURLBanner : this.state.desktopURLBanner} />
                        </div>
                    </section>
                    </Zoom>
                    <section><h1 className="bundle-name">ALL IN ONE BUNDLE</h1></section>
                    <section className="includes-component">
                        <h2 className="includes-title">INCLUDES 16 CLOCK FACES</h2>
                        <Slider {...settings} className="bundleSlider">
                            {this.displayClockfaces(this.state.bundles[0])}
                        </Slider>
                    </section>
                    <Steps/>
                    <a
                      href="https://k-pay.io/code/?s=21128EF3-D81C-C4A4-6B21-82C482CD1C6E&dsu=158823&p=1721"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MyLink
                        className="purchaseBundleButton"
                        onClick={() =>
                          gtmEvent(
                            "Purchase",
                            "Click",
                            "ALL IN ONE BUNDLE"
                          )
                        }
                      >
                        PURCHASE
                      </MyLink>
                    </a>
                </div>
            );
        }
    }
}

export default Bundle;