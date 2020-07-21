import React from "react";
import styled from "styled-components";

const StyledHeadline = styled.h3(
  (props) => `
font-weight:  ${props.theme.typography.medium};
text-align: center;
margin: ${props.marginStyle};
${props.styles}
`
);

const Headline = (props) => {
  return (
    <StyledHeadline marginStyle={props.marginStyle} styles={props.styles}>
      {props.children}
    </StyledHeadline>
  );
};

export default Headline;
