import React, { useState, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";

import { getCampground, deleteCampground } from "../actions/campgroundActions";
import { returnErrors } from "../actions/errorActions";
import { redirect } from "../actions/routerActions";
import { addReview } from "../actions/reviewActions";
import { useDispatch, useSelector } from "react-redux";

import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";
import FlexWrapper from "../components/FlexWrapper";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Paper from "../components/Paper";
import Headline from "../components/Headline";
import Review from "../components/Review";
import Rating from "../components/Rating";
import Textarea from "../components/Textarea";
import Form from "../components/Form";
import Map from "../components/Map";

import Layout from "../layouts/Layout";

const scrollToRef = (ref) => {
  window.scrollTo(0, ref.current.offsetTop);
  console.log("scrolled");
};

const Campground = (props) => {
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const campgroundData = useSelector((state) => state.campground.campground);
  const isLoading = useSelector((state) => state.campground.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const currentUser = useSelector((state) => state.auth.user);
  const scrollToReviews = useSelector((state) => state.router.scrollToReviews);

  const [isUserAuthor, setIsUserAuthor] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState({});

  const myRef = useRef(null);

  useEffect(() => {
    dispatch(getCampground(id));
  }, []);

  useEffect(() => {
    if (scrollToReviews) {
      scrollToRef(myRef);
    }
  }, [campgroundData]);

  useEffect(() => {
    if (campgroundData && campgroundData.author && currentUser) {
      currentUser._id === campgroundData.author.id || currentUser.isAdmin
        ? setIsUserAuthor(true)
        : setIsUserAuthor(false);
    }
  }, [campgroundData, currentUser]);

  useEffect(() => {
    if (isAuthenticated) {
      setReview({
        author: {
          id: currentUser._id,
          username: currentUser.username,
        },
      });
    }
  }, [isReviewFormOpen]);

  useEffect(() => {
    setReview({ ...review, rating: rating });
  }, [rating]);

  return (
    <Layout>
      {/* <Button onClick={() => scrollToRef(myRef)}></Button> */}
      <Modal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        onConfirm={() => dispatch(deleteCampground(id))}
        bodyText=""
        titleText="Do you want to delete this campground?"
      ></Modal>

      <Container justifyContent="space-between" flexWrap="wrap">
        {/* <FlexWrapper justifyContent="center">
          <Alert type="success">Alert</Alert>
        </FlexWrapper> */}

        {isLoading ? (
          <FlexWrapper justifyContent="center">
            <Loader></Loader>
          </FlexWrapper>
        ) : (
          <React.Fragment>
            <FlexWrapper justifyContent="space-between">
              {isAuthenticated && isUserAuthor ? (
                <FlexWrapper justifyContent="flex-end">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    marginStyle={"0 2rem 2rem 0"}
                    linkStyle={true}
                    colorStyle={themeContext.color.warning}
                  >
                    Delete
                  </Button>
                  <Link to={`/campgrounds/${id}/edit`}>
                    <Button
                      marginStyle={"0 0 2rem 0"}
                      linkStyle={true}
                      colorStyle={themeContext.color.dark}
                    >
                      Edit
                    </Button>
                  </Link>
                </FlexWrapper>
              ) : null}

              <Paper marginStyle="0 2rem 2rem 0" widthStyle="w-1/4">
                <Map
                  center={{ lat: campgroundData.lat, lng: campgroundData.lng }}
                  zoom={11}
                ></Map>
              </Paper>
              <Card
                widthStyle="w-2/3"
                campground={campgroundData}
                key={id}
              ></Card>
            </FlexWrapper>

            <FlexWrapper justifyContent="flex-end">
              <div ref={myRef}></div>
              <Paper flexDirection="column" widthStyle="w-2/3">
                <FlexWrapper justifyContent="space-between" alignItems="center">
                  <Headline tag="h5">Reviews</Headline>

                  <Button
                    onClick={() => {
                      if (isAuthenticated) {
                        setIsReviewFormOpen(!isReviewFormOpen);
                      } else {
                        dispatch(redirect("/login"));
                        dispatch(returnErrors("You need to be logged in"));
                      }
                    }}
                    colorStyle={themeContext.color.light}
                    backgroundColorStyle={themeContext.color.dark}
                    sizeVertialStyle={themeContext.space[0.5]}
                    sizeHorizontalStyle={themeContext.space[1.75]}
                  >
                    {isReviewFormOpen ? "Cancel" : "Add review"}
                  </Button>
                </FlexWrapper>

                {isReviewFormOpen ? (
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      dispatch(addReview(review, id));
                      setIsReviewFormOpen(false);
                      setRating(0);
                    }}
                  >
                    <Textarea
                      required={true}
                      onChange={(e) => {
                        setReview({ ...review, text: e.target.value });
                      }}
                    ></Textarea>
                    <FlexWrapper
                      marginStyle="0 0 2rem 0"
                      justifyContent="space-between"
                    >
                      <Rating
                        rating={rating}
                        setRating={setRating}
                        label="Your rating: "
                        isSettable={true}
                      ></Rating>
                      <Button
                        colorStyle={themeContext.color.light}
                        backgroundColorStyle={themeContext.color.dark}
                        sizeVertialStyle={themeContext.space[0.5]}
                        sizeHorizontalStyle={themeContext.space[1.75]}
                      >
                        Submit
                      </Button>
                    </FlexWrapper>
                  </Form>
                ) : null}

                {campgroundData.reviews
                  ? campgroundData.reviews.map((review) => {
                      return (
                        <Review
                          key={review.id}
                          review={review}
                          campgroundId={campgroundData._id}
                        ></Review>
                      );
                    })
                  : null}
              </Paper>
            </FlexWrapper>
          </React.Fragment>
        )}
      </Container>
    </Layout>
  );
};

export default Campground;
