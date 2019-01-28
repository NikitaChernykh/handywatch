import React from "react";
import Layout from "./Components/Layout";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Faq from "./Components/Faq";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Faq} path="/faq" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
