import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "styled-components";

import img from "../images/cover.jpg";

import Container from "../components/Container";
import MainHeadline from "../components/MainHeadline";
import Button from "../components/Button";
import Headline from "../components/Headline";

const StyledCover = styled.div(
  (props) => `
  background-image: url(${img});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  color: ${props.theme.color.light};
  padding: 0;
  height: 200vh;
  width: 100%;
  position: relative;

`
);

const StyledGradientOverlay = styled.div(
  (props) => `
  background: linear-gradient(0deg, rgba(248,247,244,1) 0%, rgba(255,255,255,0) 100%);
  position: absolute;
  bottom: 0;
  height: 50vh;
  width: 100%;
  pointer-events: none;
  
`
);

const SectionImageCover = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledCover>
      <StyledGradientOverlay />
      <Container>
        <MainHeadline>Your next camping destination awaits</MainHeadline>
      </Container>
      <Container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        heightStyle="100vh"
      >
        <Headline
          textAlign="center"
          tag="h3"
          styles={`text-shadow: ${themeContext.style.textShadow};`}
        >
          Find reliable camping sites, anywhere.
        </Headline>
        <Link to="/campgrounds">
          <Button
            colorStyle={themeContext.color.dark}
            backgroundColorStyle={themeContext.color.light}
            sizeVertialStyle={themeContext.space[0.75]}
            sizeHorizontalStyle={themeContext.space[2]}
          >
            Browse
          </Button>
        </Link>
      </Container>
    </StyledCover>
  );
};

export default SectionImageCover;
