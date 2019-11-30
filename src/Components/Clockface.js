import React from "react";
import Rodal from "rodal";
import MyLink from "./MyLink";
import MyButton from "./MyButton";
import ClockfaceSlider from "./ClockfaceSlider";
import { gtmEvent } from "../Utils/utils";
import { isMobile } from "react-device-detect";
import modalImg from "../Images/modal.webp";
import details from "../Images/details.svg";
import { Link } from "react-router-dom";
import New from "./New";
import "rodal/lib/rodal.css";

class Clockface extends React.Component {
  constructor(props) {
    super(props);
    this.state = { downloadVisible: false, detailsVisible: false };
  }

  show(modal) {
    if (modal === "detailsVisible") {
      gtmEvent(
        "Details Open",
        "Click",
        "Details Open for: " + this.props.clockface.name
      );
    }
    this.setState({ [modal]: true });
  }

  hide(modal) {
    this.setState({ [modal]: false });
  }

  displayStats = stats => {
    if (stats) {
      const values = Object.values(stats);
      return values.map(value => <li key={value}>{value}</li>);
    }
  };

  renderDownlaodButton = () => {
    if (isMobile) {
      return (
        <a
          href={this.props.clockface.downloadURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MyLink
            className="clockface-downloadbtn"
            onClick={() =>
              gtmEvent(
                "Download",
                "Click",
                "Download: " + this.props.clockface.name
              )
            }
          >
            INSTALL
          </MyLink>
        </a>
      );
    }
    return (
      <MyButton
        className="clockface-downloadbtn"
        onClick={() => this.show("downloadVisible")}
      >
        INSTALL
      </MyButton>
    );
  };
  render() {
    return (
      <div>
        <div className="clockface">
          {this.props.clockface.type === "new" ? <New /> : null}
          <div className="clockface-image">
            <ClockfaceSlider
              versaImage={this.props.clockface.versaAPNG}
              ionicImage={this.props.clockface.ionicAPNG}
              name={this.props.clockface.name}
            />
          </div>
          <div className="clockface-content">
            <h3>{this.props.clockface.name}</h3>
              <Link
                to={`details/${this.props.clockface.id}`}
                className="description-btn"
              >
                <img src={details} alt="see more clockface details"/>
                <span>DETAILS</span>
              </Link>
            {this.renderDownlaodButton()}
          </div>
          <Rodal
            className="modal"
            visible={this.state.downloadVisible}
            onClose={() => this.hide("downloadVisible")}
            closeOnEsc={true}
            customStyles={{
              width: "auto",
              height: "auto",
              bottom: "auto",
              left: window.innerWidth < 600 ? "5%" : "20%",
              right: window.innerWidth < 600 ? "5%" : "20%",
              top: "50%",
              padding: "50px 25px 25px 25px",
              transform: "translateY(-50%)"
            }}
          >
            <div className="modal-content">
              <h3>To download, please open this website on mobile device.</h3>
              <p>
                Your phone must have{" "}
                <a
                  className="faqlink"
                  href="https://www.fitbit.com/au/app#download-now"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fitbit App
                </a>{" "}
                installed and paired with your watch.
              </p>
              <img src={modalImg} alt="open on mobile device" width="300" />
            </div>
          </Rodal>
        </div>
        <Rodal
          className="modal"
          visible={this.state.detailsVisible}
          onClose={() => this.hide("detailsVisible")}
          closeOnEsc={true}
          customStyles={{
            width: "auto",
            height: "auto",
            bottom: "auto",
            left: window.innerWidth < 600 ? "5%" : "30%",
            right: window.innerWidth < 600 ? "5%" : "30%",
            top: "50%",
            padding: "25px 5px 25px 5px",
            transform: "translateY(-50%)"
          }}
        >
          <div className="description">
            <h2>Description:</h2>
            <p>
              {this.props.clockface.description}
              <br />
              <br />
            </p>
            <p>
              Available stats:
              <br />
              <br />
            </p>
            <ul>{this.displayStats(this.props.clockface.stats)}</ul>
          </div>
        </Rodal>
      </div>
    );
  }
}

export default Clockface;
