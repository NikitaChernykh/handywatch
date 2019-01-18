import React from "react";
import MyButton from "./MyButton";
import ClockfaceSlider from "./ClockfaceSlider";
const Clockface = ({ clockface }) => {
  return (
    <div className="clockface">
      <div className="clockface-image">
        {/* <img src={clockface.versaImage} />
        <img src={clockface.ionicImage} /> */}
        <ClockfaceSlider
          versaImage={clockface.versaImage}
          ionicImage={clockface.ionicImage}
        />
        <div className="clockface-type">
          <MyButton className="clock-button">VERSA</MyButton>
          <MyButton className="clock-button">IONIC</MyButton>
        </div>
      </div>
      <div className="clockface-content">
        <h3>{clockface.name}</h3>
        <MyButton className="clockface-downloadbtn">DOWNLOAD</MyButton>
      </div>
    </div>
  );
};

export default Clockface;
