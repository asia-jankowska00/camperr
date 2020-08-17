import React from "react";
import styled from "styled-components";

const StyledForm = styled.form(
  (props) => `

      `
);

const Form = (props) => {
  return <StyledForm onSubmit={props.onSubmit}>{props.children}</StyledForm>;
};

export default Form;
