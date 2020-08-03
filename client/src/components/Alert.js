import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import Paper from "./Paper";

const StyledAlert = styled.p(
  (props) => `
  font-family: 
  ${props.theme.typography.font_secondary}, ${props.theme.typography.font_fallback};
  text-align: center;
  width: 100%;
`
);

const Alert = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <Paper
      paddingStyle={themeContext.space[1]}
      widthStyle="50%"
      backgroundStyle={
        props.type === "warning"
          ? themeContext.color.warning_light
          : props.type === "success"
          ? themeContext.color.success_light
          : themeContext.color.white
      }
      colorStyle={
        props.type === "warning"
          ? themeContext.color.warning
          : props.type === "success"
          ? themeContext.color.success
          : themeContext.color.dark
      }
    >
      <StyledAlert>{props.children}</StyledAlert>
    </Paper>
  );
};

export default Alert;
