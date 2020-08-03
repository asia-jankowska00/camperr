import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { deleteReview } from "../actions/reviewActions";

import FlexWrapper from "./FlexWrapper";
import Avatar from "./Avatar";
import Rating from "./Rating";
import Button from "./Button";
import Textarea from "./Textarea";
import Paragraph from "./Paragraph";

// const StyledReview = styled.p(
//   (props) => `

//   `
// );

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

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const campgroundId = props.campgroundId;
  const review = props.review;
  const rating = review.rating;

  const initialRating = review.rating || 0;

  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [newRating, setNewRating] = useState(initialRating);
  const [newReviewText, setNewReviewText] = useState(review.text);

  return (
    <FlexWrapper alignItems="center">
      <Avatar
        image={
          "https://www.mountain-forecast.com/system/images/25979/large/Turbacz.jpg?1559050776"
        }
      ></Avatar>

      <StyledReviewWrapper>
        <FlexWrapper justifyContent="space-between">
          <Rating
            label={isEditFormOpen ? "Rating:" : null}
            isSettable={isEditFormOpen ? true : false}
            initialRating={initialRating}
            size="20"
            rating={isEditFormOpen ? newRating : rating}
            setRating={isEditFormOpen ? setNewRating : null}
          ></Rating>

          {isAuthenticated ? (
            <FlexWrapper widthStyle="auto">
              <Button
                onClick={() => {
                  dispatch(deleteReview(campgroundId, review._id));
                }}
                marginStyle={"0 2rem 2rem 0"}
                linkStyle={true}
                colorStyle={themeContext.color.warning}
              >
                Delete
              </Button>

              <Button
                onClick={() => {
                  setNewReviewText(review.text);
                  setIsEditFormOpen(!isEditFormOpen);
                }}
                marginStyle={"0 0 2rem 0"}
                linkStyle={true}
                colorStyle={themeContext.color.dark}
              >
                {isEditFormOpen ? "Cancel" : "Edit"}
              </Button>
            </FlexWrapper>
          ) : null}
        </FlexWrapper>

        {isEditFormOpen ? (
          <React.Fragment>
            <Textarea
              value={newReviewText}
              onChange={(e) => {
                setNewReviewText(e.target.value);
              }}
            ></Textarea>
            <Button
              colorStyle={themeContext.color.light}
              backgroundColorStyle={themeContext.color.dark}
              sizeVertialStyle={themeContext.space[0.5]}
              sizeHorizontalStyle={themeContext.space[1.75]}
            >
              Submit
            </Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Paragraph>{review.text}</Paragraph>
            <Paragraph>Created at: {review.createdAt}</Paragraph>
          </React.Fragment>
        )}
      </StyledReviewWrapper>
    </FlexWrapper>
  );
};

export default Review;
