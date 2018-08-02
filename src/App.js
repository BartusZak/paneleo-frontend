import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import LayoutContainer from "./hoc/Layout/LayoutContainer";
// import MainContainer from "containers/Main/MainContainer";
import MainContainer from "./containers/Main/MainContainer";

import PageNotFoundCotainer from "./containers/Main/PageNotFound/PageNotFoundContainer";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/main" />
          <LayoutContainer>
            <MuiThemeProvider theme={theme}>
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
