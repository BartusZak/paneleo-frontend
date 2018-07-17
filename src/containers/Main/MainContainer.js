import React from "react";
import { Route, Switch } from "react-router-dom";

import LoggingContainer from "./Logging/LoggingContainer";
import AboutContainer from "./About/AboutContainer";

const MainContainer = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route path={`${match.url}/about`} component={AboutContainer} />
        <Route exac path="/" component={LoggingContainer} />
      </Switch>
    </div>
  );
};

export default MainContainer;
