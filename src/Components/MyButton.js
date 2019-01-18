import React from "react";
import ReactDOM from "react-dom";
import posed from "react-pose";
import "../App.css";

const MyButton = posed.button({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  press: {
    scale: 0.9,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

export default MyButton;