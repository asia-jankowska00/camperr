import React from "react";
import styled from "styled-components";

const StyledHeadline = styled.h1((props) => ({
  color: props.theme.color.light,
  position: "absolute",
  top: "30vh",
  width: "50%",
  //   transform: "translate(50%, 50%)",
}));

const Headline = (props) => {
  return <StyledHeadline>{props.children}</StyledHeadline>;
};

export default Headline;
