import React from "react";
import styled from "styled-components";
import img from "../images/cover.jpg";
import Headline from "./Headline";

const StyledCover = styled.div((props) => ({
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: props.theme.color.light,
  padding: props.theme.light,
  height: "200vh",
  width: "100%",
  position: "relative",
  zIndex: "-1",
}));

const StyledGradientOverlay = styled.div((props) => ({
  background: `linear-gradient(0deg, rgba(248,247,244,1) 0%, rgba(255,255,255,0) 100%);`,
  position: "absolute",
  bottom: 0,
  height: "50vh",
  width: "100%",
}));

const ImageCover = (props) => {
  return (
    <StyledCover>
      <Headline>Your next camping destination awaits</Headline>
      <StyledGradientOverlay />
    </StyledCover>
  );
};

export default ImageCover;
