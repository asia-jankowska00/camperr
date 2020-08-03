import React from "react";
import styled from "styled-components";

const StyledFlexWrapper = styled.div(
  (props) => `
  width: ${props.widthStyle ? props.widthStyle : "100%"};
  display: flex;
  flex-wrap: wrap;
  flex-direction ${props.flexDirection};
  justify-content: ${props.justifyContent};
  align-items: ${props.alignItems};
  margin: ${props.marginStyle}

`
);

const FlexWrapper = (props) => {
  return (
    <StyledFlexWrapper
      marginStyle={props.marginStyle}
      widthStyle={props.widthStyle}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      flexDirection={props.flexDirection}
    >
      {props.children}
    </StyledFlexWrapper>
  );
};

export default FlexWrapper;
