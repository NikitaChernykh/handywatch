import React from "react";
import { firebaseClockfaces} from "../firebase";
import { firebaseLooper, reverseArray } from "../Utils/utils";
import Clockface from "./Clockface";
import Slide from "react-reveal/Slide";
class ClockFaces extends React.Component {
  state = {
    loading: true,
    clockfaces: [],
    bestClockfaces: [],
    xmasClockfaces: [],
    halloweenClockfaces: [],
    otherClockfaces: [],
    filteredClockfaces: [],
    filterBy: "featured"
  };
  componentDidMount() {
    firebaseClockfaces.once("value").then(snapshot => {
      const clockfaces = firebaseLooper(snapshot);
      const bestClockfaces = clockfaces.filter(clockface => clockface.category === "best");
      const xmasClockfaces = clockfaces.filter(clockface => clockface.category === "xmas");
      const halloweenClockfaces = clockfaces.filter(clockface => clockface.category === "halloween");
      const otherClockfaces = clockfaces.filter(clockface => !clockface.category);
      this.setState({
        clockfaces: reverseArray(clockfaces),
        bestClockfaces: reverseArray(bestClockfaces),
        xmasClockfaces: reverseArray(xmasClockfaces),
        halloweenClockfaces: reverseArray(halloweenClockfaces),
        otherClockfaces: reverseArray(otherClockfaces),
        filteredClockfaces: reverseArray(otherClockfaces),
        loading: false
      });
    });
  }
  componentDidUpdate() {
    this.showClockfaces(this.state.otherClockfaces);
    this.showClockfaces(this.state.bestClockfaces);
  }
  filterBy = type => {
    const list = [...this.state.filteredClockfaces].sort((a, b) => {
      return b.uploadDate - a.uploadDate;
    });

    this.setState({
      otherClockfaces: type === "date" ? list : this.state.filteredClockfaces,
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
      return <div className="ghost-loading">
        <div className="ghost-loading-box"></div>
        <div className="ghost-loading-box"></div>
        <div className="ghost-loading-box"></div>
        <div className="ghost-loading-box"></div>
        <div className="ghost-loading-box"></div>
        <div className="ghost-loading-box"></div>
        <div className="ghost-loading-box"></div>
        <div className="ghost-loading-box"></div>
        <div className="ghost-loading-box"></div>
      </div>;
    } else {
      return (
        <div>
          {/* <h2 className="sub-title">Best Picks</h2>
          <div className="clockfaces-grid ">
            {this.showClockfaces(this.state.bestClockfaces)}
          </div> */}
          {/* <h2 className="sub-title ">More from collection</h2>
          <div className="filters ">
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
          </div> */}
          {/* <div className="clockfaces-grid ">
            {this.showClockfaces(this.state.otherClockfaces)}
          </div> */}
          {/* <h2 className="sub-title ">Christmas Picks</h2>
          <div className="clockfaces-grid ">
            {this.showClockfaces(this.state.xmasClockfaces)}
          </div>
          <h2 className="sub-title ">Halloween Picks</h2>
          <div className="clockfaces-grid ">
            {this.showClockfaces(this.state.halloweenClockfaces)}
          </div> */}
        </div>
      );
    }
  }
}

export default ClockFaces;
