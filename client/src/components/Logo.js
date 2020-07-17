import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div(
  (props) => `
    text-decoration: none;
    color: ${props.theme.color.light};
    font-weight: ${props.theme.typography.bold};
    font-size: ${props.theme.space[1.75]};
    text-shadow: ${props.theme.style.textShadow};
    padding: ${props.theme.space[1.75]};
  `
);

const Logo = () => {
  return <StyledLogo>camperr</StyledLogo>;
};

export default Logo;
