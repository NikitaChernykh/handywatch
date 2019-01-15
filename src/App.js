import React, { Component } from "react";
import "./App.css";
import banner from "./Images/banner.jpg";
import ClockFaces from "./Components/ClockFaces";

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
              <div className="hero-text">
                <h1>
                  CLOCKFACES <br />
                  FOR FITBIT
                </h1>
                <p>Use promo code “HANDYWATCH” at the checkout</p>
                <p>To get 15% off your purchase.</p>
                <button>SHOP NOW</button>
              </div>
              <div className="hero-image">
                <img src={banner} alt="" />
              </div>
            </div>
          </section>
          <section className="clockfaces">
            <ClockFaces />
          </section>
        </main>
        <footer> heelo</footer>
      </div>
    );
  }
}

export default App;
