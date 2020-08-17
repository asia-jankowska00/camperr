import React from "react";
import styled from "styled-components";

const StyledPaper = styled.div(
  (props) => `
    width: ${
      props.theme.width[props.widthStyle]
        ? props.theme.width[props.widthStyle]
        : props.widthStyle
    };
    height: ${props.heightStyle ? props.heightStyle : "auto"};
    background: ${
      props.backgroundStyle ? props.backgroundStyle : props.theme.color.white
    };
    color: ${props.colorStyle ? props.colorStyle : props.theme.color.dark};
    padding: ${props.paddingStyle ? props.paddingStyle : props.theme.space[2]};
    box-shadow: ${props.theme.style.shadow};
    margin-bottom: ${props.theme.space[2]};
    display: flex;
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    flex-direction: ${props.flexDirection};
    position: ${props.positionStyle};
    margin: ${props.marginStyle};
   top: ${props.topStyle ? props.topStyle : ""};
  `
);

const Paper = (props) => {
  return (
    <StyledPaper
      colorStyle={props.colorStyle}
      backgroundStyle={props.backgroundStyle}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      flexDirection={props.flexDirection}
      paddingStyle={props.paddingStyle}
      widthStyle={props.widthStyle}
      heightStyle={props.heightStyle}
      positionStyle={props.positionStyle}
      marginStyle={props.marginStyle}
      topStyle={props.topStyle}
    >
      {props.children}
    </StyledPaper>
  );
};

export default Paper;
