import React, { Component } from "react";
import { firebaseClockfaces } from "../firebase";
import { firebaseLooper, reverseArray } from "../Utils/utils";
import Clockface from "./Clockface";
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
          <Clockface
            clockface={clockface}
            key={clockface.id}
            linkto={clockface.downloadURL}
          />
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
