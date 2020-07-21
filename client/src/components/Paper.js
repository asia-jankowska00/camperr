import React from "react";
import styled from "styled-components";

const StyledPaper = styled.div(
  (props) => `
    background: ${props.theme.color.white};
    padding: ${props.theme.space[2]};
    box-shadow: ${props.theme.style.shadow};
    margin-bottom: ${props.theme.space[2]};
    display: flex;
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    flex-direction: ${props.flexDirection};
    
  `
);

const Paper = (props) => {
  return (
    <StyledPaper
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      flexDirection={props.flexDirection}
    >
      {props.children}
    </StyledPaper>
  );
};

export default Paper;
