import React, { Component } from "react";
import "./App.css";
import banner from "./Images/banner.png";
import ClockFaces from "./Components/ClockFaces";
import MyButton from "./Components/MyButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
class App extends Component {
  render() {
    return (
      <div className="App grid">
        <header className="App-header">
          <div className="App-logo">HANDY.WATCH</div>
        </header>
        <main className="main-grid">
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
                <Jump delay={3000}>
                  <AnchorLink href="#clockfaces">
                    <MyButton data-gtm="banner-btn" className="hero-button">
                      SHOP NOW
                    </MyButton>
                  </AnchorLink>
                </Jump>
              </div>
              <div className="hero-image">
                <Zoom>
                  <img src={banner} alt="" />
                </Zoom>
              </div>
            </div>
          </section>
          <section id="clockfaces" className="clockfaces">
            <ClockFaces />
          </section>
        </main>
        <footer> heelo</footer>
      </div>
    );
  }
}

export default App;
