import React from "react";
import Layout from "./Components/Layout";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Faq from "./Components/Faq";
import ClockfaceDetails from "./Components/ClockfaceDetails";
import Bundle from "./Components/Bundle";

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
          <Route {...this.props} exact component={Bundle} path="/bundles" />
          <Route {...this.props} exact component={ClockfaceDetails} path="/details/:id" />
          <Route {...this.props} exact component={Home} path="/" />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
