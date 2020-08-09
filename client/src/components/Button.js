import React from "react";
import styled from "styled-components";

const StyledButton = styled.button(
  (props) => `
    background: ${props.backgroundColorStyle};
    color: ${props.colorStyle};
    border-radius: ${props.theme.style.round};
    padding: ${props.sizeVertialStyle} ${props.sizeHorizontalStyle};
    font-family:   ${props.theme.typography.font_secondary}, ${
    props.theme.typography.font_fallback
  };
    font-weight: ${props.theme.typography.bold};
    font-size: inherit;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
    transition: ${props.theme.transition.transform_veryFast};
    margin: ${props.marginStyle};
  
    ${
      props.linkStyle
        ? `border-radius: 0; border-bottom: 1px solid ${props.colorStyle}; background: ${props.theme.color.transparent};`
        : ""
    }

    &:hover {
      ${!props.linkStyle ? `box-shadow: ${props.theme.style.shadow};` : ""}
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(2px);
    }

    &:focus {
      outline: 1px solid ${props.theme.color.grey_med};
    }
`
);

const Button = (props) => {
  return (
    <StyledButton
      type={props.type}
      onClick={props.onClick}
      colorStyle={props.colorStyle}
      backgroundColorStyle={props.backgroundColorStyle}
      sizeHorizontalStyle={props.sizeHorizontalStyle}
      sizeVertialStyle={props.sizeVertialStyle}
      linkStyle={props.linkStyle}
      marginStyle={props.marginStyle}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
