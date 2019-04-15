import React from "react";
import ClockFaces from "./ClockFaces";
import { Helmet } from "react-helmet";
import Banner from "./Banner";

class Home extends React.Component {
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
        <Banner/>
        <section id="clockfaces" className="clockfaces">
          <ClockFaces />
        </section>
      </div>
    );
  }
}

export default Home;
