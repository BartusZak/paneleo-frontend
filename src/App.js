import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import LayoutContainer from "hoc/Layout/LayoutContainer";
import MainContainer from "containers/Main/MainContainer";

import PageNotFoundCotainer from "./containers/Main/PageNotFound/PageNotFoundContainer";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/main" />
          <LayoutContainer>
            <MuiThemeProvider>
              <Switch>
                <Route path="/main" component={MainContainer} />
                <Route component={PageNotFoundCotainer} />
              </Switch>
            </MuiThemeProvider>
          </LayoutContainer>
        </Switch>
      </Router>
    );
  }
}
export default App;
