import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p(
  (props) => `
  font-family: 
  ${props.theme.typography.font_secondary}, ${props.theme.typography.font_fallback};
  font-weight: ${props.theme.typography.light};
  line-height: 1.6;
  margin-bottom:  ${props.theme.space[2]};

${props.styles}
`
);

const Paragraph = (props) => {
  return (
    <StyledParagraph styles={props.styles}>{props.children}</StyledParagraph>
  );
};

export default Paragraph;
