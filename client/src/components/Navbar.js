import React from "react";
import styled from "styled-components";

// import NavLink from "./NavLink";

const StyledNavbar = styled.nav((props) => ({
  // background: props.theme.color.dark,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  color: props.theme.color.light,
  padding: `${props.theme.space[0.5]} ${props.theme.space[1.5]}`,
  position: "fixed",
}));

const StyledNav = styled.div((props) => ({}));

const StyledNavbarLogo = styled.a((props) => ({
  fontWeight: 700,
  fontSize: "200%",
}));

const StyledNavLink = styled.a((props) => ({
  textDecoration: "none",
  padding: `0 ${props.theme.space["1"]}`,
}));

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarLogo>camperr</StyledNavbarLogo>
      <StyledNav>
        <StyledNavLink href="#">Log in</StyledNavLink>
        <StyledNavLink href="#">Sign up</StyledNavLink>
      </StyledNav>
    </StyledNavbar>
  );
};

export default Navbar;
