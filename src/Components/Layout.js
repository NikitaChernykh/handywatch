import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Layout = props => {
  return (
    <div className="App grid">
      <header className="App-header">
        <div className="App-logo">
          <Link to="/">HANDY.WATCH</Link>
        </div>
      </header>
      <main className="main-grid">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
