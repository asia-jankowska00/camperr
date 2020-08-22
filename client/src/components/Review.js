import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
import styled from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { deleteReview, updateReview } from "../actions/reviewActions";

import FlexWrapper from "./FlexWrapper";
import Avatar from "./Avatar";
import Rating from "./Rating";
import Button from "./Button";
import Textarea from "./Textarea";
import Paragraph from "./Paragraph";
import Form from "./Form";
import { GET_USER } from "../actions/types";

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
  const currentUser = useSelector((state) => state.auth.user);

  const campgroundId = props.campgroundId;
  const review = props.review;
  const rating = review.rating;

  const initialRating = review.rating || 0;

  const [isUserAuthor, setIsUserAuthor] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [newRating, setNewRating] = useState(initialRating);
  const [newReviewText, setNewReviewText] = useState(review.text);

  useEffect(() => {
    if (review && review.author && currentUser) {
      currentUser._id === review.author.id || currentUser.isAdmin
        ? setIsUserAuthor(true)
        : setIsUserAuthor(false);

      // getUser(review.author.id)
    }
  }, [review, currentUser]);

  return (
    <FlexWrapper alignItems="flex-start">
      <Avatar
        image={
          `/files/${review.author.image}`
            ? `/files/${review.author.image}`
            : "https://www.mountain-forecast.com/system/images/25979/large/Turbacz.jpg?1559050776"
        }
      ></Avatar>

      <StyledReviewWrapper>
        <FlexWrapper justifyContent="space-between">
          {review.author ? (
            <Link to={`/profile/${review.author._id}`}>
              <Paragraph marginStyle="0 0 1.5rem 0">
                {review.author.username}
              </Paragraph>
            </Link>
          ) : null}

          {isAuthenticated && isUserAuthor ? (
            <FlexWrapper widthStyle="auto">
              <Button
                onClick={() => {
                  dispatch(deleteReview(campgroundId, review._id));
                }}
                marginStyle={"0 2rem 1rem 0"}
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
                marginStyle={"0 0 1rem 0"}
                linkStyle={true}
                colorStyle={themeContext.color.dark}
              >
                {isEditFormOpen ? "Cancel" : "Edit"}
              </Button>
            </FlexWrapper>
          ) : null}
        </FlexWrapper>

        {isEditFormOpen ? (
          <Form
            onSubmit={(e) => {
              const newReview = {
                rating: newRating,
                text: newReviewText,
              };
              e.preventDefault();
              dispatch(updateReview(campgroundId, review._id, newReview));
              setIsEditFormOpen(false);
            }}
          >
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
          </Form>
        ) : (
          <React.Fragment>
            <Rating
              label={isEditFormOpen ? "Rating:" : null}
              isSettable={isEditFormOpen ? true : false}
              initialRating={initialRating}
              size="20"
              rating={isEditFormOpen ? newRating : rating}
              setRating={isEditFormOpen ? setNewRating : null}
            ></Rating>
            <Paragraph marginStyle={"0.5rem 0 2rem 0"}>{review.text}</Paragraph>
            <Paragraph marginStyle="0" colorStyle={themeContext.color.grey_med}>
              Added at:
              {moment(review.createdAt).format("MMMM Do YYYY, h:mm a")}
            </Paragraph>
          </React.Fragment>
        )}
      </StyledReviewWrapper>
    </FlexWrapper>
  );
};

export default Review;
