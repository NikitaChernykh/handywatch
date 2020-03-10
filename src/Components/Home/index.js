import React from "react";
import ClockFaces from "../ClockFaces";
import { Helmet } from "react-helmet";
import { firebaseClockfaces} from "../../firebase";
import { firebaseLooper, reverseArray } from "../../Utils/utils";
import Banner from "../Banner";
import Navigation from "../Navigation";
import "./home.scss";
import MiniCard from "../MiniCard";
class Home extends React.Component {
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
  showClockfaces = clockfaces =>
    clockfaces
      ? clockfaces.map(clockface => (
          <div bottom key={clockface.id}>
            <MiniCard
              clockface={clockface}
              versaImage={clockface.versaAPNG}
              ionicImage={clockface.ionicAPNG}
              linkto={clockface.downloadURL}
              type={clockface.type}
            />
          </div>
        ))
      : null;
  render() {
    return (
      <div>
        <Helmet>
          <title>
            HANDY.WATCH - Best Fitbit Clock Face Store for Versa and Ionic Smart
            Watches
          </title>
          <meta
            name="description"
            content="Install best clock faces for smart watches like Fitbit Versa and Fitbit Ionic."
          />
          <link rel="canonical" href="https://handy.watch/" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <div className="wrapper">
          <Navigation selectedClocks="selected"/>
        </div>
        <Banner/>
        <div className="wrapper">
          <h2 className="category-title">Best Picks</h2>
          <div className="home-grid">
            {this.showClockfaces(this.state.bestClockfaces)}
          </div>
        </div>
        <div className="wrapper">
          <section id="clockfaces" className="clockfaces">
            <ClockFaces />
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
