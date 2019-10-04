import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import * as Sentry from '@sentry/browser';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

Sentry.init({dsn: "https://2702126aec444fd5870c8c0ea82f90b5@sentry.io/1435188"});

const App = props => {
  return (
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
