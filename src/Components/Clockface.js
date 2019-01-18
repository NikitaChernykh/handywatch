import React from "react";
import BannerButton from "./BannerButton";
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
          <BannerButton className="clock-button">VERSA</BannerButton>
          <BannerButton className="clock-button">IONIC</BannerButton>
        </div>
      </div>
      <div className="clockface-content">
        <h3>{clockface.name}</h3>
        <BannerButton className="clockface-downloadbtn">DOWNLOAD</BannerButton>
      </div>
    </div>
  );
};

export default Clockface;
