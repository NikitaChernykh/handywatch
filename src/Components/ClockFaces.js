import React, { Component } from "react";
import { firebaseClockfaces } from "../firebase";
import { firebaseLooper, reverseArray } from "../Utils/utils";
import Clockface from "./Clockface";
import Slide from "react-reveal/Slide";
class ClockFaces extends Component {
  state = {
    clockfaces: []
  };
  componentDidMount() {
    firebaseClockfaces.once("value").then(snapshot => {
      const clockfaces = firebaseLooper(snapshot);

      this.setState({
        clockfaces: reverseArray(clockfaces)
      });
    });
  }

  showClockfaces = clockfaces =>
    clockfaces
      ? clockfaces.map(clockface => (
          <Slide bottom key={clockface.id}>
            <Clockface clockface={clockface} linkto={clockface.downloadURL} />
          </Slide>
        ))
      : null;
  render() {
    return (
      <div className="clockfaces-grid wrapper">
        {this.showClockfaces(this.state.clockfaces)}
      </div>
    );
  }
}

export default ClockFaces;
