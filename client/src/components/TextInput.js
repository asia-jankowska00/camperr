import React from "react";
import styled from "styled-components";

import InputWrapper from "./InputWrapper";
import Label from "./Label";

const StyledTextInput = styled.input.attrs((props) => ({
  type: props.type,
  value: props.value,
}))(
  (props) => `
        width: 100%;
        background: ${props.theme.color.light};
        color: ${props.theme.color.dark};
        font-family: 
        ${props.theme.typography.font_secondary}, ${props.theme.typography.font_fallback};
        font-weight: ${props.theme.typography.bold};
        border: none;
        border-bottom: 1px solid ${props.theme.color.grey_med};
        padding: ${props.theme.space[0.25]};
        margin-bottom: ${props.theme.space[1]};

        &:focus {
          outline-color: ${props.theme.color.grey_med};
        }
      `
);

const TextInput = (props) => {
  return (
    <InputWrapper>
      <Label>{props.label}</Label>
      <StyledTextInput type={props.type} value={props.value} />
    </InputWrapper>
  );
};

export default TextInput;
