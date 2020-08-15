import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { ReactComponent as Star } from "../images/star.svg";

const StyledStarWrapper = styled.div(
  (props) => `
  display: inline-block;
         ${
           props.isSettable
             ? `cursor: pointer;
                  }
          `
             : ``
         }

      `
);

const StyledRadio = styled.input.attrs((props) => ({
  value: props.value,
}))(
  (props) => `
      display: none;
      `
);

const RatingStar = (props) => {
  const themeContext = useContext(ThemeContext);

  const hoverRating = props.hoverRating;
  const setHoverRating = props.setHoverRating;

  const setRating = props.setRating;
  const rating = props.rating;
  // const initialRating = props.initialRating;

  return (
    <StyledStarWrapper isSettable={props.isSettable}>
      <Star
        onClick={props.isSettable ? () => setRating(props.starId) : null}
        onMouseEnter={
          props.isSettable ? () => setHoverRating(props.starId) : null
        }
        onMouseLeave={
          props.isSettable
            ? () => {
                setHoverRating(rating);
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
      ></Star>

      <StyledRadio
        radioId={props.starId}
        name="rating"
        defaultChecked={props.starId <= rating ? true : false}
      ></StyledRadio>
    </StyledStarWrapper>
  );
};

export default RatingStar;
