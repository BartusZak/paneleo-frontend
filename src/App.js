import React, { Component } from "react";
import Auxi from "hoc/Auxi";

import LayoutContainer from "hoc/Layout/LayoutContainer";

export default class App extends Component {
  render() {
    return (
      <Auxi>
        <LayoutContainer>
          <p>Test</p>
        </LayoutContainer>
      </Auxi>
    );
  }
}
