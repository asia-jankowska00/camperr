import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// background: ${props.navColor ? props.navColor : "transparent"};

const StyledNavbar = styled.nav(
  (props) => `
 background: ${props.theme.color.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${props.theme.color.light};
  padding: ${props.theme.space[0.5]} ${props.theme.space[1.5]};
  position: fixed;
  z-index: 9999;

  a {
    text-decoration: none;
  }
  `
);

const StyledNav = styled.div(
  (props) => `
   display: flex;
   align-items: center;
`
);

const StyledNavbarLogo = styled.div(
  (props) => `
  text-decoration: none;
  font-weight: ${props.theme.typography.bold};
  font-size: ${props.theme.space[1.75]};
  text-shadow: ${props.theme.style.textShadow};
  margin-right: ${props.theme.space[1.5]};
`
);

const StyledNavLink = styled.div(
  (props) => `
  text-decoration: none;
  margin: 0 ${props.theme.space["1"]};
  text-shadow: ${props.theme.style.textShadow};
 
  &:hover {
    border-bottom: 1px solid ${props.theme.color.light};
  },
`
);

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNav>
        <Link to="/">
          <StyledNavbarLogo> camperr</StyledNavbarLogo>
        </Link>
        <Link to="/campgrounds">
          <StyledNavLink>Browse</StyledNavLink>
        </Link>
      </StyledNav>

      <StyledNav>
        <Link to="/login">
          <StyledNavLink>Log in</StyledNavLink>
        </Link>
        <Link to="/signup">
          <StyledNavLink>Sign up</StyledNavLink>
        </Link>
      </StyledNav>
    </StyledNavbar>
  );
};

export default Navbar;
