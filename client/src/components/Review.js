import React from "react";
import styled from "styled-components";

import FlexWrapper from "./FlexWrapper";
import Avatar from "./Avatar";
import Rating from "./Rating";

const StyledReview = styled.p(
  (props) => `
   
  `
);

const StyledReviewWrapper = styled.div(
  (props) => `
      background: ${props.theme.color.light};
      padding: ${props.theme.space[2]};
      flex-grow: 1;

    `
);

const Review = (props) => {
  const rating = 4;

  return (
    <FlexWrapper alignItems="center">
      <Avatar
        image={
          "https://www.mountain-forecast.com/system/images/25979/large/Turbacz.jpg?1559050776"
        }
      ></Avatar>
      <StyledReviewWrapper>
        <Rating size="20" rating={rating}></Rating>
        <StyledReview>Review text</StyledReview>
      </StyledReviewWrapper>
    </FlexWrapper>
  );
};

export default Review;
