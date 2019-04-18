import React, { Component } from 'react';
import Jump from "react-reveal/Jump";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MyButton from "./MyButton";
import banner from "../Images/bannerv.png";
import Zoom from "react-reveal/Zoom";

class Banner extends Component {
    render() {
        return (
        <section className="hero">
            <div className="hero-grid wrapper">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>
                        Summer Vacation Clock is Available Now <strong style={{
                            color:"#ffc226",
                            fontWeight: "900"
                        }} >☀</strong> 
                        </h1>
                        <p>Use promo code <strong style={{
                            color:"#ff9505",
                        }} >"SUN"</strong> at the checkout</p>
                        <p>To get <strong style={{
                            color:"#ff9505",
                            fontWeight: "900"
                        }} >10% off</strong>  your purchase.</p>
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