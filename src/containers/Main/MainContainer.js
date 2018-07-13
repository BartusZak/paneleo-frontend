import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import LoggingContainer from "./Logging/LoggingContainer";
import AboutContainer from "./About/AboutContainer";

export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <p>Main Container</p>
        <Link to="/logging">Logowanie</Link>
      </div>
    );
  }
}
