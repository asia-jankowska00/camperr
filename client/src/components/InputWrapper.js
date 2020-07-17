import React from "react";
import styled from "styled-components";

const StyledInputWrapper = styled.div(
  (props) => `
 
  `
);

const InputWrapper = (props) => {
  return <StyledInputWrapper>{props.children}</StyledInputWrapper>;
};

export default InputWrapper;
