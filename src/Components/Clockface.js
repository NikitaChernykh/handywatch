import React from "react";
import BannerButton from "./BannerButton";
const Clockface = ({ clockface }) => {
  return (
    <div className="clockface">
      <div className="clockface-image">
        <img src="http://placehold.jp/300x400.png" />
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
