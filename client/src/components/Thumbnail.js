import React from "react";
import styled from "styled-components";

import { useContext } from "react";
import { ThemeContext } from "styled-components";

// import img from "../images/cover.jpg";

import Button from "./Button";
import Headline from "./Headline";

const StyledThumbnailContainer = styled.div(
  (props) => `
    width: 45%;
    height: 250px;
    background-image: url(/files/${props.image});
    background-size: cover;
    background-position: center;
    box-shadow: ${props.theme.style.shadow};
    margin-bottom:  ${props.theme.space[2]};

    &:hover * {
      opacity: 1
    }

  `
);

const StyledThumbnailOverlay = styled.div(
  (props) => `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:  rgba(21, 27, 17, 0.7);
    color: ${props.theme.color.light};
    opacity: 0;
    transition: opacity ${props.theme.speed.medium};

  `
);

const Thumbnail = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledThumbnailContainer image={props.image}>
      <StyledThumbnailOverlay>
        <Headline tag="h3">{props.title}</Headline>
        <Button
          onClick={props.buttonOnClick}
          linkStyle={true}
          colorStyle={themeContext.color.light}
          backgroundColorStyle={themeContext.color.transparent}
          sizeVertialStyle={themeContext.space[0.25]}
          sizeHorizontalStyle={themeContext.space[0]}
        >
          {props.linkText}
        </Button>
      </StyledThumbnailOverlay>
    </StyledThumbnailContainer>
  );
};

export default Thumbnail;
