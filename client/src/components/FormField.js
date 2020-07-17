import React from "react";
import styled from "styled-components";

import InputWrapper from "./InputWrapper";
import Label from "./Label";

const StyledTextInput = styled.input.attrs((props) => ({
  type: "text",
}))(
  (props) => `
        width: 100%;
        background: ${props.theme.color.light};
        color: ${props.theme.color.dark};
      `
);

const TextInput = (props) => {
  return (
    <InputWrapper>
      <Label>Text input label</Label>
      <StyledTextInput />
    </InputWrapper>
  );
};

export default TextInput;
