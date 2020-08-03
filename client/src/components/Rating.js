import React, { useState } from "react";

import RatingStar from "./RatingStar";
import Label from "./Label";

const Rating = (props) => {
  const maxRating = 5;

  const initialRating = props.initialRating;
  const setRating = props.setRating;
  const rating = props.rating;

  const [hoverRating, setHoverRating] = useState(initialRating);

  const size = props.size || 20;

  return (
    <div>
      {props.label ? <Label> {props.label}</Label> : null}

      {[...Array(maxRating)].map((star, index) => {
        return (
          <RatingStar
            isSettable={props.isSettable}
            initialRating={initialRating}
            setRating={setRating}
            rating={rating}
            hoverRating={hoverRating}
            setHoverRating={setHoverRating}
            size={size}
            starId={index + 1}
            key={index + 1}
          ></RatingStar>
        );
      })}
    </div>
  );
};

export default Rating;
