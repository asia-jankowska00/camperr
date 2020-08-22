import React from "react";
import styled from "styled-components";

const StyledFlexWrapper = styled.div(
  (props) => `
  width: ${props.widthStyle ? props.widthStyle : "100%"};
  height: ${props.heightStyle ? props.heightStyle : "auto"};
  display: flex;
  flex-wrap: wrap;
  flex-direction ${props.flexDirection};
  justify-content: ${props.justifyContent};
  align-items: ${props.alignItems};
  margin: ${props.marginStyle};
  background: ${props.backgroundStyle};
  padding:  ${props.paddingStyle};
  
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

const FlexWrapper = (props) => {
  return (
    <StyledFlexWrapper
      mobileL={props.mobileL}
      tablet={props.tablet}
      laptop={props.laptop}
      heightStyle={props.heightStyle}
      marginStyle={props.marginStyle}
      widthStyle={props.widthStyle}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      flexDirection={props.flexDirection}
      backgroundStyle={props.backgroundStyle}
      paddingStyle={props.paddingStyle}
    >
      {props.children}
    </StyledFlexWrapper>
  );
};

export default FlexWrapper;
