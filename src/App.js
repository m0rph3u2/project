import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

//const express = require('express');
//const app = express();
//import "./Database.js";

import { SurveyPage } from "./Survey";

import "bootstrap/dist/css/bootstrap.css";

export default function SurveyJSReactApplication() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                Job Application
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/survey">Survey</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/survey">
            <SurveyPage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
