import React from "react";
import Layout from "./Components/Layout";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Faq from "./Components/Faq";
import ClockfaceDetails from "./Components/ClockfaceDetails";

class Routes extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    window.addEventListener("hashchange", function() {
      window.scrollTo(window.scrollX, window.scrollY - 10);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange");
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route {...this.props} exact component={Faq} path="/faq" />
          <Route
            {...this.props}
            exact
            component={Home}
            path="/fitbitsettings"
          />
          <Route exact path="/bundles" render={() => {
            window.location.href = "https://k-pay.io/code/?s=21128EF3-D81C-C4A4-6B21-82C482CD1C6E&dsu=158823&p=1721-1190-1023-1064-1427-2318";
            return null;
          }} />
          <Route {...this.props} exact component={ClockfaceDetails} path="/details/:id" />
          <Route {...this.props} exact component={Home} path="/" />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
