import React from "react";
import styled from "styled-components";

const StyledBuffer = styled.div(
  (props) => `
height: 75px;
width: 100%;
      `
);

const Buffer = () => {
  return <StyledBuffer />;
};

export default Buffer;
