import React, { Component } from "react";
import Auxi from "hoc/Auxi";

import ToolBar from "./ToolBar";
import MainMenu from "./MainMenu";

export default class LayoutContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <Auxi>
        <ToolBar />
        <main id="main">
          <MainMenu />
          <section id="content">{children}</section>
        </main>
      </Auxi>
    );
  }
}
