import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import upBtn from "../Images/up.svg";
import { gtmEvent } from "../Utils/utils";
const Layout = props => {
  return (
    <div className="App grid">
      <header className="App-header">
        <div className="App-logo">
          <Link to="/">
            <h1>HANDY.WATCH</h1>
          </Link>
        </div>
      </header>
      <main className="main-grid">{props.children}</main>
      <ScrollToTop
        showUnder={500}
        style={{
          bottom: 150
        }}
      >
        <img
          onClick={() => gtmEvent("Scroll Up", "Click", "Scroll Up Button")}
          className="upBtn"
          src={upBtn}
          alt="go up"
        />
      </ScrollToTop>
      <Footer />
    </div>
  );
};

export default Layout;
