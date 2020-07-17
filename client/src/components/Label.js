import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label(
  (props) => `
    
    `
);

const Label = (props) => {
  return <StyledLabel>{props.children}</StyledLabel>;
};

export default Label;
