import React from "react";
import { firebaseClockfaces } from "../firebase";
import { firebaseLooper, reverseArray } from "../Utils/utils";
import Clockface from "./Clockface";
import Slide from "react-reveal/Slide";
class ClockFaces extends React.Component {
  state = {
    loading: true,
    clockfaces: [],
    filteredClockfases: [],
    filterBy: "featured"
  };
  componentDidMount() {
    firebaseClockfaces.once("value").then(snapshot => {
      const clockfaces = firebaseLooper(snapshot);
      this.setState({
        loading: false,
        clockfaces: reverseArray(clockfaces),
        filteredClockfases: reverseArray(clockfaces)
      });
    });
  }
  componentDidUpdate() {
    this.showClockfaces(this.state.filteredClockfases);
  }
  filterBy = type => {
    const list = [...this.state.clockfaces].sort((a, b) => {
      return b.uploadDate - a.uploadDate;
    });

    this.setState({
      filteredClockfases: type === "date" ? list : this.state.clockfaces,
      filterBy: type
    });
  };
  showClockfaces = clockfaces =>
    clockfaces
      ? clockfaces.map(clockface => (
          <Slide bottom key={clockface.id}>
            <Clockface
              clockface={clockface}
              versaImage={clockface.versaAPNG}
              ionicImage={clockface.ionicAPNG}
              linkto={clockface.downloadURL}
              type={clockface.type}
            />
          </Slide>
        ))
      : null;
  render() {
    const state = this.state;
    console.log(state);
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="filters wrapper">
            Filter by:{" "}
            <button
              data-gtm="filter-date"
              className={`${state.filterBy === "date" ? "option-active" : ""}`}
              onClick={() => this.filterBy("date")}
            >
              Release Date
            </button>{" "}
            <button
              data-gtm="filter-featured"
              className={`${
                state.filterBy === "featured" ? "option-active" : ""
              }`}
              onClick={() => this.filterBy("featured")}
            >
              Featured
            </button>
          </div>
          <div className="clockfaces-grid wrapper">
            {this.showClockfaces(this.state.filteredClockfases)}
          </div>
        </div>
      );
    }
  }
}

export default ClockFaces;
