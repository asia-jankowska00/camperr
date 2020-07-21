import React from "react";
import styled from "styled-components";

import InputWrapper from "./InputWrapper";
import Label from "./Label";

const StyledTextarea = styled.textarea.attrs((props) => ({
  value: props.value,
}))(
  (props) => `
        width: 100%;
        min-height: 100px;
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

const Textarea = (props) => {
  return (
    <InputWrapper>
      <Label>{props.label}</Label>
      <StyledTextarea />
    </InputWrapper>
  );
};

export default Textarea;
