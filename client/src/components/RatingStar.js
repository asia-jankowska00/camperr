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
  const initialRating = props.initialRating;

  return (
    <React.Fragment>
      <StyledStar
        isSettable={props.isSettable}
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
      ></StyledStar>
      <StyledRadio
        radioId={props.starId}
        name="rating"
        checked={props.starId <= rating ? true : false}
      ></StyledRadio>
    </React.Fragment>
  );
};

export default RatingStar;
