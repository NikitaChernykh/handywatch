import React from "react";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-up";
import upBtn from "../Images/up.svg";
import { gtmEvent } from "../Utils/utils";
import Header from "./Header";
const Layout = props => {
  return (
    <div className="App grid">
      <Header/>
      <main>{props.children}</main>
      <ScrollToTop showUnder={500}>
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
