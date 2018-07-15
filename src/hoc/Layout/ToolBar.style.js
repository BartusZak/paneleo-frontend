import styled from "styled-components";

const ToolBarContainer = styled.header`
  width: 100%;
  user-select: none;
  position: relative;
  padding: 40px 45px;
  margin-bottom: 20px;
  z-index: 10;
  overflow: visible;
  zoom: 1;
  display: block;

  &:first-child {
    margin-top: 0;
  }

  div {
    font-family: "Futura Bold Italic", sans-serif;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    span {
      margin-left: 20px;
      color: white;
      font-size: 23px;
      letter-spacing: 1px;
      &:after {
          content: "Admin Panel";
          display: block;
          font-weight: 400;
          font-size: 18px;
          line-height: 100%;
          margin-top: -3px;
          color: rgba(255, 255, 255, 0.6);
          text-transform: lowercase;
        }
      }
    }
  }
`;

export default ToolBarContainer;
