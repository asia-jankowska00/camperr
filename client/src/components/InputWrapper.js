import React from "react";
import styled from "styled-components";

const StyledInputWrapper = styled.div(
  (props) => `
  width: 100%;
  `
);

const InputWrapper = (props) => {
  return <StyledInputWrapper>{props.children}</StyledInputWrapper>;
};

export default InputWrapper;
