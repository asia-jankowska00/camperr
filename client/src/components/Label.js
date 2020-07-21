import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label(
  (props) => `
  font-family: 
  ${props.theme.typography.font_secondary}, ${props.theme.typography.font_fallback};
  letter-spacing: 2px;
  font-weight: ${props.theme.typography.bold};
  font-size: ${props.theme.space[0.75]};
    `
);

const Label = (props) => {
  return <StyledLabel>{props.children}</StyledLabel>;
};

export default Label;
