import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import Auxi from "hoc/Auxi";
import LayoutContainer from "hoc/Layout/LayoutContainer";
import MainContainer from "containers/Main/MainContainer";

import PageNotFoundCotainer from "./containers/Main/PageNotFound/PageNotFoundContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/main" />
          {/* <Route path="/checkout" exact component={Checkout} /> */}
          <LayoutContainer>
            <Switch>
              <Route path="/main" component={MainContainer} />

              {/* <Route path="/products" component={Products} />
                  <Route path="/product/:item" component={ProductSingle} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/forgetpass" component={ForgetPass} /> */}
              <Route component={PageNotFoundCotainer} />
            </Switch>
          </LayoutContainer>
        </Switch>
      </Router>
    );
  }
}
export default App;
