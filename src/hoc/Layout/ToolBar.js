import React from "react";

import ToolBarContainer from "./ToolBar.style";
import PaneleoIcon from "../../assets/img/paneleo/paneleo_icon.png";
const ToolBar = props => (
  <ToolBarContainer>
    <div>
      <img
        style={{
          width: "40px",
          height: "40px"
        }}
        src={PaneleoIcon}
        alt="Paneleo icon"
      />
      <span>Paneleo</span>
    </div>
  </ToolBarContainer>
);

export default ToolBar;
