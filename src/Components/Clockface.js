import React from "react";
import MyButton from "./MyButton";
import ClockfaceSlider from "./ClockfaceSlider";

class Clockface extends React.Component {
  render() {
    return (
      <div className="clockface">
        <div className="clockface-image">
          <ClockfaceSlider
            versaImage={this.props.clockface.versaImage}
            ionicImage={this.props.clockface.ionicImage}
          />
        </div>
        <div className="clockface-content">
          <h3>{this.props.clockface.name}</h3>
          <MyButton className="clockface-downloadbtn">DOWNLOAD</MyButton>
        </div>
      </div>
    );
  }
}

export default Clockface;
