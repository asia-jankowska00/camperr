import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { ReactComponent as Star } from "../images/star.svg";

const Rating = (props) => {
  const themeContext = useContext(ThemeContext);
  const maxRating = 5;
  const rating = props.rating;
  const leftRatings = maxRating - rating;

  return (
    <React.Fragment>
      {[...Array(rating)].map((star, index) => {
        return (
          <Star
            key={index}
            height={props.size}
            width={props.size}
            fill={themeContext.color.success}
          ></Star>
        );
      })}

      {[...Array(leftRatings)].map((star, index) => {
        return (
          <Star
            key={index}
            height={props.size}
            width={props.size}
            fill={themeContext.color.success_light}
          ></Star>
        );
      })}
    </React.Fragment>
  );
};

export default Rating;
