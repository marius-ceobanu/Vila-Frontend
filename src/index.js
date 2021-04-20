import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./scss/material-kit-react.scss?v=1.9.0";

import HomePage from "./components/HomePage/HomePage";
import RoomDetails from "./components/Rooms/RoomDetails";
import HeaderLinks from "./components/Layout/HeaderLinks";
import Header from "./components/Layout/Header";

let hist = createBrowserHistory();

const dashboardRoutes = [];
const { ...rest } = hist;

ReactDOM.render(
  <Router history={hist}>
      <Header
          color="transparent"
          routes={dashboardRoutes}
          brand=""
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
              height: 400,
              color: "custom"
          }}
          { ...rest }
      />
      <Switch>
          <Route exact path={["/", "/home"]} component={HomePage} />
          <Route path="/rooms/:id" component={RoomDetails} />
      </Switch>
  </Router>,
  document.getElementById('root')
);
