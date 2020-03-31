import React from "react";
import Layout from "./Components/Layout";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home/";
import Faq from "./Components/Faq";
import Privacy from "./Components/Privacy";

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
          <Route {...this.props} exact component={Privacy} path="/privacy-policy" />
          <Route {...this.props} exact component={Faq} path="/faq" />
          <Route
            {...this.props}
            exact
            component={Home}
            path="/fitbitsettings"
          />
          <Route exact path="/bundles" render={() => {
            window.location.href = "https://kiezelpay.com/code/?s=21128EF3-D81C-C4A4-6B21-82C482CD1C6E&dsu=158823&p=7405-2318-1064-1413-8892-1023-1721";
            return null;
          }} />
          <Route {...this.props} exact component={Home} path="/" />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
