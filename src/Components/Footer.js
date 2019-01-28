import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <ul>
        <li target="_blank" rel="noopener noreferrer" href="#">
          <a>Instagram</a>
        </li>
        <li target="_blank" rel="noopener noreferrer" href="#">
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/handywatch"
          >
            Twitter
          </a>
        </li>
      </ul>

      <div className="App-logo white font-18">HANDY.WATCH</div>
      <p className="copyrigth">© HANDY.WATCH 2019</p>
    </footer>
  );
};

export default Footer;
