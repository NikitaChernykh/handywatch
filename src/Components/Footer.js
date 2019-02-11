import React from "react";
import { Link } from "react-router-dom";
import { gtmEvent, gtmVitrualPageView } from "../Utils/utils";
const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/handy.watch/"
            onClick={() => gtmEvent("Footer", "Click", "Instagram")}
          >
            Instagram
          </a>
        </li>
        <li>
          <Link to="/faq" onClick={() => gtmVitrualPageView(document.title)}>
            FAQ
          </Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => gtmEvent("Footer", "Click", "Twitter")}
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
