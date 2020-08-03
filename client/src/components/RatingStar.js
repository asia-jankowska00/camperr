import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { ReactComponent as Star } from "../images/star.svg";

const StyledStar = styled(Star)(
  (props) => `
        cursor: ${props.isSettable ? "pointer" : "default"}
      `
);

const RatingStar = (props) => {
  const themeContext = useContext(ThemeContext);
  const setRating = props.setRating;
  const rating = props.rating;

  return (
    <StyledStar
      isSettable={props.isSettable}
      onClick={props.isSettable ? () => setRating(props.starId) : null}
      height={props.size}
      width={props.size}
      fill={
        props.starId <= rating
          ? themeContext.color.success
          : themeContext.color.success_light
      }
    ></StyledStar>
  );
};

export default RatingStar;
