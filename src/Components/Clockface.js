import React from "react";

const Clockface = ({ clockface }) => {
  return (
    <div className="clockface">
      <div className="clockface-type">
        <button>VERSA</button>
        <button>IONIC</button>
      </div>
      <img src="http://placehold.jp/300x200.png" />
      <div className="clockface-content">{clockface.name}</div>
      <button className="clockface-downloadbtn">DOWNLOAD</button>
    </div>
  );
};

export default Clockface;
