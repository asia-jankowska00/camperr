import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { ReactComponent as Pin } from "../images/map-pin.svg";

const StyledPin = styled(Pin)(
  (props) => `
           ${props.centered ? "transform: translate(-50%, -50%); " : ""}
      display: inline;
        `
);

const MapPin = (props) => {
  return (
    <StyledPin
      centered={props.centered}
      height={props.size}
      width={props.size}
      // fill={

      // }
    ></StyledPin>
  );
};

export default MapPin;
