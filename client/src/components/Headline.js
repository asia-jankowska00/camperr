import React from "react";
import styled from "styled-components";

const StyledHeadline = styled.h1(
  (props) => `
  font-weight:  ${props.theme.typography.medium};
  text-align: ${props.textAlign};
  margin: ${props.marginStyle};
  width: ${props.fullWidth ? "100%" : "auto"};
${props.styles}
`
);

const Headline = (props) => {
  return (
    <StyledHeadline
      as={props.tag}
      marginStyle={props.marginStyle}
      styles={props.styles}
      textAlign={props.textAlign}
      fullWidth={props.fullWidth}
    >
      {props.children}
    </StyledHeadline>
  );
};

export default Headline;
