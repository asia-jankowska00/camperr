import React from "react";
import styled from "styled-components";

const StyledSticky = styled.div(
  (props) => `
    position: sticky;

      `
);

const Sticky = (props) => {
  return <StyledSticky>{props.children}</StyledSticky>;
};

export default Sticky;
