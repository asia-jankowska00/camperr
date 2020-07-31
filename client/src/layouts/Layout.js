import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import globalStyles from "../themes/globalStyles";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Buffer from "../components/Buffer";

const GlobalStyle = createGlobalStyle((props) => globalStyles);

const Layout = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {location.pathname === "/" ? "" : <Buffer />}
      {props.children}
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Layout;
