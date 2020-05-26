import React from "react";
import { Link } from "react-router-dom";
import { gtmEvent, gtmVitrualPageView } from "../../Utils/utils";
import "./footer.scss";
const Footer = () => {

  function getFullYear () {
    var d = new Date();
    var fullYear = d.getFullYear();
    return fullYear;
  }

  return (
    <footer className="hw-footer">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/_handywatch_/"
            onClick={() => gtmEvent("Footer", "Click", "Instagram")}
          >
            Instagram
          </a>
        </li>
        <li>
          {/* not a correct way of sending page views. Needs refactor */}
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
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => gtmEvent("Footer", "Click", "Facebook")}
            href="https://www.facebook.com/handy.watch/"
          >
            Facebook
          </a>
        </li>
      </ul>

      <div className="App-logo white font-18">
        <Link
          to="/"
          onClick={() => gtmEvent("Footer", "Click", "Back Home Logo")}
        >
          HANDY.WATCH
        </Link>
      </div>
      <p className="legal">© {getFullYear()} Explicit Dot. All rights reserved.</p>
      <Link to="/privacy-policy" onClick={() => gtmVitrualPageView(document.title)}>
        <p className="legal">Privacy Policy</p>
      </Link>
    </footer>
  );
};

export default Footer;
