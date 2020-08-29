import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import Home from "../../pages/Home"
import Cpns from "../../pages/Cpns";
import { Explore } from "../../pages/Explore";
import { Office } from "../../pages/Office";
import Notification from "../../pages/Notification";


export default class Content extends Component {

  render() {
    return (
        <Switch>
          <Route path="/cpns">
            <Cpns />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/notification">
            <Notification />
          </Route>
          <Route path="/office">
            <Office />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    );
  }
}

