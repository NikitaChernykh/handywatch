import React from "react";
import { firebaseClockfaces, bestClockfaces } from "../firebase";
import { firebaseLooper, reverseArray } from "../Utils/utils";
import Clockface from "./Clockface";
import Slide from "react-reveal/Slide";
class ClockFaces extends React.Component {
  state = {
    loading: true,
    clockfaces: [],
    bestClockfaces: [],
    filteredClockfases: [],
    filterBy: "featured"
  };
  componentDidMount() {
    firebaseClockfaces.once("value").then(snapshot => {
      const clockfaces = firebaseLooper(snapshot);
      this.setState({
        clockfaces: reverseArray(clockfaces),
        filteredClockfases: reverseArray(clockfaces)
      });
    });
    bestClockfaces.once("value").then(snapshot => {
      const bestClockfaces = firebaseLooper(snapshot);
      this.setState({
        loading: false,
        bestClockfaces: reverseArray(bestClockfaces)
      });
    });
  }
  componentDidUpdate() {
    this.showClockfaces(this.state.filteredClockfases);
    this.showClockfaces(this.state.bestClockfaces);
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
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h2 className="sub-title wrapper">Best sellers</h2>
          <div className="clockfaces-grid wrapper">
            {this.showClockfaces(this.state.bestClockfaces)}
          </div>
          <h2 className="sub-title wrapper">More from collection</h2>
          <div className="filters wrapper">
            Filter by:{" "}
            <button
              data-gtm="filter-featured"
              className={`${
                state.filterBy === "featured" ? "option-active" : ""
              }`}
              onClick={() => this.filterBy("featured")}
            >
              Featured
            </button>{" "}
            <button
              data-gtm="filter-date"
              className={`${state.filterBy === "date" ? "option-active" : ""}`}
              onClick={() => this.filterBy("date")}
            >
              Release Date
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
