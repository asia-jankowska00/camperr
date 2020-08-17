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
  margin: ${props.marginStyle};

  text-align: ${props.textAlign ? props.textAlign : "left"};
  color: ${props.colorStyle ? props.colorStyle : "inherit"};
  background: ${props.backgroundStyle ? props.backgroundStyle : "inherit"};
  padding: ${props.paddingStyle ? props.paddingStyle : "0"};

${props.styles}
`
);

const Paragraph = (props) => {
  return (
    <StyledParagraph
      colorStyle={props.colorStyle}
      marginStyle={props.marginStyle}
      textAlign={props.textAlign}
      styles={props.styles}
      backgroundStyle={props.backgroundStyle}
      paddingStyle={props.paddingStyle}
    >
      {props.children}
    </StyledParagraph>
  );
};

export default Paragraph;
