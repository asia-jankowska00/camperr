import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import Paper from "./Paper";
import Container from "./Container";
import Paragraph from "./Paragraph";
import Button from "./Button";
import Buffer from "./Buffer";
import Headline from "./Headline";
import FlexWrapper from "./FlexWrapper";

const StyledBackground = styled.div(
  (props) => `
    background: ${props.theme.color.dark_transparent};
    overflow-y: hidden;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 9998
    `
);

const StyledCloseButton = styled.div(
  (props) => `
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  div {
    top: 0%;
    right: 0%;
    position: absolute;
    width: 30px;
    height: 30px;
  }

    div:before, div:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: ${props.theme.color.grey_med};
    border-radius: 2px;
    top: 0%;
    right: -50%;
}

div:before{
    -webkit-transform:rotate(45deg);
    -moz-transform:rotate(45deg);
    transform: rotate(45deg);
}

div:after{
    -webkit-transform:rotate(-45deg);
    -moz-transform:rotate(-45deg);
    transform: rotate(-45deg);

}

  `
);

const Modal = (props) => {
  const themeContext = useContext(ThemeContext);

  if (props.isModalOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "visible";
  }

  return props.isModalOpen ? (
    <StyledBackground>
      <Buffer></Buffer>
      <Container heightStyle="50vh" justifyContent="center" alignItems="center">
        <Paper flexDirection="column">
          <Headline tag="h3">{props.titleText}</Headline>
          <Paragraph textAlign="center">{props.bodyText}</Paragraph>
          <FlexWrapper justifyContent="space-between">
            <Button
              onClick={() => props.setIsModalOpen(false)}
              linkStyle={true}
              colorStyle={themeContext.color.dark}
              backgroundColorStyle={themeContext.color.transparent}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                props.setIsModalOpen(false);
                props.onConfirm();
              }}
              colorStyle={themeContext.color.light}
              backgroundColorStyle={themeContext.color.dark}
              sizeVertialStyle={themeContext.space[0.25]}
              sizeHorizontalStyle={themeContext.space[1]}
            >
              Confirm
            </Button>
          </FlexWrapper>
        </Paper>
      </Container>
    </StyledBackground>
  ) : null;
};

export default Modal;
