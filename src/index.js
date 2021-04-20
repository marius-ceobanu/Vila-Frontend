import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./scss/material-kit-react.scss?v=1.9.0";

import HomePage from "./components/HomePage/HomePage";
import RoomDetails from "./components/Rooms/RoomDetails";
import AuthenticationPage from "./components/UserAuthentication/AuthenticationPage";

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
      <Switch>
          <Route exact path={["/", "/home"]} component={HomePage} />
          <Route path="/rooms/:id" component={RoomDetails} />
          <Route path="/authentication/:mode" component={AuthenticationPage } />
      </Switch>
  </Router>,
  document.getElementById('root')
);
