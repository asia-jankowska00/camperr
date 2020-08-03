import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p(
  (props) => `
  font-family: 
  ${props.theme.typography.font_secondary}, ${
    props.theme.typography.font_fallback
  };
  font-weight: ${props.theme.typography.regular};
  font-size: 0.9rem;
  line-height: 1.4;
  margin: ${props.marginStyle}
  margin-bottom:  ${props.theme.space[2]};
  text-align: ${props.textAlign ? props.textAlign : "left"}

${props.styles}
`
);

const Paragraph = (props) => {
  return (
    <StyledParagraph
      marginStyle={props.marginStyle}
      textAlign={props.textAlign}
      styles={props.styles}
    >
      {props.children}
    </StyledParagraph>
  );
};

export default Paragraph;
