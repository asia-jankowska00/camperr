import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { ReactComponent as Star } from "../images/star.svg";

const StyledStar = styled(Star)(
  (props) => `
         ${
           props.isSettable
             ? `cursor: pointer;
                  }
          `
             : ``
         }

      `
);

const RatingStar = (props) => {
  const themeContext = useContext(ThemeContext);

  const hoverRating = props.hoverRating;
  const setHoverRating = props.setHoverRating;

  const setRating = props.setRating;
  const rating = props.rating;
  const initialRating = props.initialRating;

  return (
    <StyledStar
      isSettable={props.isSettable}
      onClick={props.isSettable ? () => setRating(props.starId) : null}
      onMouseEnter={
        props.isSettable ? () => setHoverRating(props.starId) : null
      }
      onMouseLeave={
        props.isSettable
          ? () => {
              console.log(initialRating);
              setHoverRating(initialRating);
            }
          : null
      }
      height={props.size}
      width={props.size}
      fill={
        props.starId <= (hoverRating || rating)
          ? themeContext.color.success
          : themeContext.color.success_light
      }
    ></StyledStar>
  );
};

export default RatingStar;
