import React from "react";
import Rodal from "rodal";
import MyLink from "./MyLink";
import MyButton from "./MyButton";
import ClockfaceSlider from "./ClockfaceSlider";
import { gtmEvent } from "../Utils/utils";
import { isMobile } from "react-device-detect";
import modalImg from "../Images/modal.png";
import "rodal/lib/rodal.css";

class Clockface extends React.Component {
  constructor(props) {
    super(props);
    this.state = { downloadVisible: false };
  }

  show() {
    this.setState({ downloadVisible: true });
  }

  hide() {
    this.setState({ downloadVisible: false });
  }
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
              gtmEvent("Download", "Click", this.props.clockface.name)
            }
          >
            DOWNLOAD
          </MyLink>
        </a>
      );
    }
    return (
      <MyButton
        className="clockface-downloadbtn"
        onClick={this.show.bind(this)}
      >
        DOWNLOAD
      </MyButton>
    );
  };
  render() {
    return (
      <div className="clockface">
        <div className="clockface-image">
          <ClockfaceSlider
            versaImage={this.props.clockface.versaImage}
            ionicImage={this.props.clockface.ionicImage}
            name={this.props.clockface.name}
          />
        </div>
        <div className="clockface-content">
          <h3>{this.props.clockface.name}</h3>

          {this.renderDownlaodButton()}
        </div>
        <Rodal
          className="modal"
          visible={this.state.downloadVisible}
          onClose={this.hide.bind(this)}
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
              Your phone must have <a>Fitbit App</a> installed and paired with
              your watch.
            </p>
            <img src={modalImg} alt="" width="300" />
          </div>
        </Rodal>
      </div>
    );
  }
}

export default Clockface;
