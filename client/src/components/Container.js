import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div(
  (props) => `
  max-width: 95vw;
  width: 100%;

  margin-right: auto;
  margin-left: auto;
  ${
    props.isGrid
      ? "display: grid; grid-template-columns: 12;"
      : "display: flex;"
  }
  flex-wrap: ${props.flexWrap};
  flex-direction ${props.flexDirection};
  justify-content: ${props.justifyContent};
  align-items: ${props.alignItems};
  min-height: ${props.heightStyle};


  @media ${props.theme.device.laptop} {
    max-width: 85vw;
  }
`
);

const Container = (props) => {
  return (
    <StyledContainer
      isGrid={props.isGrid}
      flexWrap={props.flexWrap}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      flexDirection={props.flexDirection}
      heightStyle={props.heightStyle}
    >
      {props.children}
    </StyledContainer>
  );
};

export default Container;
