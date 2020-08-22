import React, { useContext, useRef } from "react";
import styled, { ThemeContext } from "styled-components";

import InputWrapper from "./InputWrapper";
import Label from "./Label";
import Button from "./Button";

const StyledFileInput = styled.input.attrs((props) => ({
  type: props.type,
  value: props.value,
}))(
  (props) => `
  display: block;
    opacity: 0;
        
      `
);

const FileInput = (props) => {
  const themeContext = useContext(ThemeContext);

  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
    console.log(hiddenFileInput.current.files);
  };

  return (
    <InputWrapper>
      {props.label ? <Label>{props.label}</Label> : null}
      {props.chosenFile ? <Label>{props.chosenFile}</Label> : null}
      <Button
        type="button"
        onClick={handleClick}
        colorStyle={themeContext.color.light}
        backgroundColorStyle={themeContext.color.dark}
        sizeVertialStyle={themeContext.space[0.25]}
        sizeHorizontalStyle={themeContext.space[1]}
      >
        Choose file
      </Button>

      <StyledFileInput
        ref={hiddenFileInput}
        type={props.type}
        required={props.required}
        value={props.value}
        onChange={props.onChange}
      />
    </InputWrapper>
  );
};

export default FileInput;
