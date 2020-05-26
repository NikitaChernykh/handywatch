import React from "react";
import { Helmet } from "react-helmet";
import { firebaseClockfaces} from "../../firebase";
import { firebaseLooper, reverseArray } from "../../Utils/utils";
import Banner from "../Banner";
import Navigation from "../Navigation";
import "./home.scss";
import ScrollableCategory from "../ScrollableCategory";
class Home extends React.Component {
  state = {
    loading: true,
    clockfaces: [],
    bestClockfaces: [],
    xmasClockfaces: [],
    halloweenClockfaces: [],
    otherClockfaces: [],
    filteredClockfaces: [],
    filterBy: "featured",
    width: window.innerWidth
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

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;
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
        <section>
          <div className="wrapper">
            <Navigation selectedClocks="selected"/>
          </div>
        </section>
        <Banner isMobile={isMobile}/>
        {/* BEST  CATEGORY */}
        <div className="desktop-center">
        <section className="category-section">
          <div className="wrapper">
            <h2 className="category-title">Best Picks</h2>
            <ScrollableCategory isMobile={isMobile} list={this.state.bestClockfaces}/>
          </div>
        </section>
        </div>

        <section className="category-section">
          <div className="wrapper">
            <h2 className="category-title">More from collection</h2>
            <ScrollableCategory isMobile={isMobile} list={this.state.otherClockfaces}/>
          </div>
        </section>

        <section className="category-section">
          <div className="wrapper">
            <h2 className="category-title">Christmas Picks</h2>
            <ScrollableCategory isMobile={isMobile} list={this.state.xmasClockfaces}/>
          </div>
        </section>

        <section className="category-section">
          <div className="wrapper">
            <h2 className="category-title">Halloween Picks</h2>
            <ScrollableCategory isMobile={isMobile} list={this.state.halloweenClockfaces}/>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
