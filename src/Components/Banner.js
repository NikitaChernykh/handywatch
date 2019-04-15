import React, { Component } from 'react';
import Jump from "react-reveal/Jump";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MyButton from "./MyButton";
import banner from "../Images/banner.png";
import Zoom from "react-reveal/Zoom";

class Banner extends Component {
    render() {
        return (
        <section className="hero">
            <div className="hero-grid wrapper">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>
                        CLOCK FACES <br />
                        FOR FITBIT
                        </h1>
                        <p>Use promo code “HANDYWATCH” at the checkout</p>
                        <p>To get 15% off your purchase.</p>
                    </div>
                    <Jump delay={5000}>
                        <AnchorLink href="#clockfaces">
                        <MyButton data-gtm="banner-btn" className="hero-button">
                            SHOP NOW
                        </MyButton>
                        </AnchorLink>
                    </Jump>
                </div>
                <div className="hero-image">
                    <Zoom>
                        <img src={banner} alt="promo banner" />
                    </Zoom>
                </div>
            </div>
            <div className="banner-subtext">
                <h2>Beautiful and animated clock faces for Fitbit Versa & Ionic</h2>
            </div>
        </section>
        );
    }
}

export default Banner;