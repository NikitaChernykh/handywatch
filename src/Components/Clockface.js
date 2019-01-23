import React from "react";
import Rodal from "rodal";
import MyLink from "./MyLink";
import ClockfaceSlider from "./ClockfaceSlider";
import { gtmEvent } from "../Utils/utils";

import "rodal/lib/rodal.css";

class Clockface extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    console.log(this.state);
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }
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
          <a
          // href={this.props.clockface.downloadURL}
          //target="_blank"
          //rel="noopener"
          >
            <MyLink
              className="clockface-downloadbtn"
              onClick={this.show.bind(this)}
            >
              DOWNLOAD
            </MyLink>
          </a>
        </div>
        <Rodal
          className="modal"
          visible={this.state.visible}
          onClose={this.hide.bind(this)}
          customStyles={{
            width: "auto",
            height: "auto",
            bottom: "auto",
            left: "10px",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)"
          }}
        >
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
        </Rodal>
      </div>
    );
  }
}

export default Clockface;
