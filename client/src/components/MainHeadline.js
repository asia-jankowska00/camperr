import React from "react";
import styled from "styled-components";

const StyledHeadline = styled.h1(
  (props) => `
  color: ${props.theme.color.light};
  position: absolute;
  top: 40vh;
  text-shadow: ${props.theme.style.textShadow},
  width: 100%;

  @media ${props.theme.device.tablet} {
    width: 50%;
  }
`
);

const StyledHeadlineContainer = styled.div((props) => ({
  width: "100%",
  height: "100vh",
  position: "relative",
}));

const MainHeadline = (props) => {
  return (
    <StyledHeadlineContainer>
      <StyledHeadline>{props.children}</StyledHeadline>
    </StyledHeadlineContainer>
  );
};

export default MainHeadline;
