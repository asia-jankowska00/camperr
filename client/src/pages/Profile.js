import React, { useState, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";

import { getCampground, deleteCampground } from "../actions/campgroundActions";

import { useDispatch, useSelector } from "react-redux";

import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";
import FlexWrapper from "../components/FlexWrapper";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Paper from "../components/Paper";
import Headline from "../components/Headline";
import Sticky from "../components/Sticky";

import Layout from "../layouts/Layout";

const Profile = (props) => {
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const campground = useSelector((state) => state.campground.campground);
  const isLoading = useSelector((state) => state.campground.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const currentUser = useSelector((state) => state.auth.user);
  const scrollToReviews = useSelector((state) => state.router.scrollToReviews);

  return (
    <Layout>
      <Container justifyContent="space-between" flexWrap="wrap">
        {isLoading ? (
          <FlexWrapper justifyContent="center">
            <Loader></Loader>
          </FlexWrapper>
        ) : (
          <FlexWrapper justifyContent="space-between" alignItems="top">
            <FlexWrapper widthStyle="25%" alignItems="top">
              <Paper
                paddingStyle="0"
                positionStyle="sticky"
                widthStyle="100%"
                topStyle="0"
              ></Paper>
            </FlexWrapper>
            <FlexWrapper widthStyle="65%" justifyContent="space-between">
              <Headline tag="h3">User's campgrounds</Headline>
              <Card
                widthStyle="w-46%"
                showButtons={true}
                campground={campground}
                key={campground._id}
              ></Card>
              <Card
                widthStyle="w-46%"
                showButtons={true}
                campground={campground}
                key={campground._id}
              ></Card>
              <Card
                widthStyle="w-46%"
                showButtons={true}
                campground={campground}
                key={campground._id}
              ></Card>
            </FlexWrapper>
          </FlexWrapper>
        )}
      </Container>
    </Layout>
  );
};

export default Profile;
