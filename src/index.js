import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "./scss/material-kit-react.scss?v=1.9.0";

import HomePage from "./components/HomePage/HomePage";
import RoomDetails from "./components/Rooms/RoomDetails";
import AuthenticationPage from "./components/UserAuthentication/AuthenticationPage";
import Restaurant from "./components/Restaurant/Restaurant";
import DiscoverArea from "./components/DiscoverArea/DiscoverArea";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import AdminPage from "./components/AdminPage/AdminPage";

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
      <Switch>
          <Route exact path={["/", "/home"]} component={HomePage} />
          <Route path="/rooms/:id" component={RoomDetails} />
          <Route path="/authentication/:mode" component={AuthenticationPage} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/discover" component={DiscoverArea} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={AdminPage} />
      </Switch>
  </Router>,
  document.getElementById('root')
);
