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

    order: ${props.orderMobile ? props.orderMobile : ""};

   @media ${props.theme.device.tablet} {
    order: unset;
    }

    @media ${props.theme.device.mobileL} {
      ${props.mobileL}
    }

    @media ${props.theme.device.tablet} {
      ${props.tablet}
    }
    @media ${props.theme.device.laptop} {
      ${props.laptop}
    }

  `
);

const Paper = (props) => {
  return (
    <StyledPaper
      mobileL={props.mobileL}
      tablet={props.tablet}
      laptop={props.laptop}
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
      orderMobile={props.orderMobile}
    >
      {props.children}
    </StyledPaper>
  );
};

export default Paper;
