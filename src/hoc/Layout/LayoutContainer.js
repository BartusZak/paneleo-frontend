import React, { Component } from "react";
import Auxi from "hoc/Auxi";

import ToolBar from "./ToolBar";

export default class LayoutContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <Auxi>
        <ToolBar />
        <main>{children}</main>
      </Auxi>
    );
  }
}
