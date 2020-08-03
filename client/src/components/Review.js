import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import styled from "styled-components";

import { useSelector } from "react-redux";

import FlexWrapper from "./FlexWrapper";
import Avatar from "./Avatar";
import Rating from "./Rating";
import Button from "../components/Button";

const StyledReview = styled.p(
  (props) => `
   
  `
);

const StyledReviewWrapper = styled.div(
  (props) => `
      background: ${props.theme.color.light};
      padding: ${props.theme.space[2]};
      flex-grow: 1;
      margin-bottom: ${props.theme.space[2]};

    `
);

const Review = (props) => {
  const themeContext = useContext(ThemeContext);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const review = props.review;
  const rating = review.rating;

  return (
    <FlexWrapper alignItems="center">
      <Avatar
        image={
          "https://www.mountain-forecast.com/system/images/25979/large/Turbacz.jpg?1559050776"
        }
      ></Avatar>
      <StyledReviewWrapper>
        <FlexWrapper justifyContent="space-between">
          <Rating size="20" rating={rating}></Rating>
          {isAuthenticated ? (
            <FlexWrapper widthStyle="auto">
              <Button
                // onClick={}
                marginStyle={"0 2rem 2rem 0"}
                linkStyle={true}
                colorStyle={themeContext.color.warning}
              >
                Delete
              </Button>

              <Button
                marginStyle={"0 0 2rem 0"}
                linkStyle={true}
                colorStyle={themeContext.color.dark}
              >
                Edit
              </Button>
            </FlexWrapper>
          ) : null}
        </FlexWrapper>
        <StyledReview>{review.text}</StyledReview>
      </StyledReviewWrapper>
    </FlexWrapper>
  );
};

export default Review;
