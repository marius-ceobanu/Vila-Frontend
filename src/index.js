import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./scss/material-kit-react.scss?v=1.9.0";

import HomePage from "./components/HomePage/HomePage";

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
      <Switch>
          <Route path="/" component={HomePage} />
      </Switch>
  </Router>,
  document.getElementById('root')
);
