import React, { Component } from "react";

import ToolBar from "./ToolBar";
import MainMenu from "./MainMenu";

export default class LayoutContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <ToolBar />
        <main id="main">
          <MainMenu />
          <section id="content">{children}</section>
        </main>
      </React.Fragment>
    );
  }
}
