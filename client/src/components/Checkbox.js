import React from "react";
import styled from "styled-components";

import InputWrapper from "./InputWrapper";
import Label from "./Label";

const StyledCheckbox = styled.input.attrs((props) => ({
  type: "checkbox",
  id: props.id,
  checked: props.checked,
}))(
  (props) => `

      `
);

const Checkbox = (props) => {
  return (
    <InputWrapper>
      <StyledCheckbox
        id={props.id}
        required={props.required}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
      />
      {props.label ? <Label>{props.label}</Label> : null}
    </InputWrapper>
  );
};

export default Checkbox;
