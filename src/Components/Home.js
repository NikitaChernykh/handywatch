import React from "react";
import banner from "../Images/banner.png";
import ClockFaces from "./ClockFaces";
import MyButton from "./MyButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
import { Helmet } from "react-helmet";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>
            HANDY.WATCH - Best Fitbit clock face store for Versa and Ionic watch
          </title>
          <meta
            name="description"
            content="Install best clock faces for smart watches like Fitbit Versa and Fitbit Ionic."
          />
          <link rel="canonical" href="https://handy.watch/" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <section className="hero">
          <div className="hero-grid wrapper">
            <div className="hero-content">
              <div className="hero-text">
                <h1>
                  CLOCKFACES <br />
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
        </section>
        <section id="clockfaces" className="clockfaces">
          <ClockFaces />
        </section>
      </div>
    );
  }
}

export default Home;
