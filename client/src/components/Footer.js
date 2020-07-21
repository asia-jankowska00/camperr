import React from "react";
import styled from "styled-components";

import Logo from "./Logo";

const StyledFooter = styled.footer(
  (props) => `
    width: 100%;
    height: 100px;
    margin-top: auto;
    background: ${props.theme.color.black};
    color: : ${props.theme.color.light};
  `
);

const Footer = (props) => {
  return (
    <StyledFooter>
      <Logo></Logo>
      {props.children}
    </StyledFooter>
  );
};

export default Footer;
