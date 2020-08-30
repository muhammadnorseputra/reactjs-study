import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import Home from "../../pages/Home"
import Cpns from "../../pages/Cpns";
import { Explore } from "../../pages/Explore";
import { Office } from "../../pages/Office";
import Notification from "../../pages/Notification";
import NotMatch from "../../pages/NotMatch";


export default class Content extends Component {

  render() {
    return (
        <Switch>
          <Route path="/cpns" component={ Cpns } />
          <Route path="/explore" component={ Explore } />
          <Route path="/notification" component={ Notification } />
          <Route path="/office" component={ Office } />
          <Route exact path="/" component={ Home } />
          <Route component={ NotMatch } />
        </Switch>
    );
  }
}

