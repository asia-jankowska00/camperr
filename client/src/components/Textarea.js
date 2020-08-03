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
        font-weight: ${props.theme.typography.regular};
        font-size: 0.9rem;
        border: none;
        border-bottom: 1px solid ${props.theme.color.grey_med};
        padding: ${props.theme.space[0.25]};
        margin-bottom: ${props.theme.space[1]};
        resize: none;

        &:focus {
          outline-color: ${props.theme.color.grey_med};
        }
      `
);

const Textarea = (props) => {
  return (
    <InputWrapper>
      {props.label ? <Label>{props.label}</Label> : null}
      <StyledTextarea
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
    </InputWrapper>
  );
};

export default Textarea;
