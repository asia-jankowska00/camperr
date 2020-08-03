import React, { useState } from "react";

import RatingStar from "./RatingStar";

const Rating = (props) => {
  const maxRating = 5;

  const setRating = props.setRating;
  const rating = props.rating;

  const size = props.size || 20;

  return (
    <div>
      {props.label}
      {[...Array(maxRating)].map((star, index) => {
        return (
          <RatingStar
            isSettable={props.isSettable}
            size={size}
            setRating={setRating}
            rating={rating}
            starId={index + 1}
            key={index + 1}
          ></RatingStar>
        );
      })}
    </div>
  );
};

export default Rating;
