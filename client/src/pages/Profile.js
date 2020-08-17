import React, { useEffect } from "react";

import { getCampgroundsByUser } from "../actions/campgroundActions";
import { getUser } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import Container from "../components/Container";
import Card from "../components/Card";

import FlexWrapper from "../components/FlexWrapper";
import Loader from "../components/Loader";

import Headline from "../components/Headline";
import Banner from "../components/Banner";

import Layout from "../layouts/Layout";

const Profile = (props) => {
  const dispatch = useDispatch();

  const campgroundsData = useSelector((state) => state.campground.campgrounds);
  const isLoading = useSelector((state) => state.campground.loading);

  const currentUser = useSelector((state) => state.auth.user);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    // if (currentUser) {
    dispatch(getCampgroundsByUser(props.match.params.userId));
    dispatch(getUser(props.match.params.userId));
    // }
  }, []);

  return (
    <Layout>
      <Container justifyContent="space-between" flexWrap="wrap">
        {isLoading ? (
          <FlexWrapper justifyContent="center">
            <Loader></Loader>
          </FlexWrapper>
        ) : (
          <FlexWrapper justifyContent="space-between" alignItems="flex-start">
            <FlexWrapper widthStyle="25%" alignItems="flex-start">
              <Banner></Banner>
            </FlexWrapper>
            <FlexWrapper widthStyle="65%" justifyContent="space-between">
              <Headline fullWidth={true} tag="h3">
                {user ? `${user.username}'s campgrounds` : ""}
              </Headline>
              {isLoading ? (
                <FlexWrapper justifyContent="center">
                  <Loader></Loader>
                </FlexWrapper>
              ) : (
                campgroundsData.map((campground) => {
                  return (
                    <Card
                      widthStyle="w-46%"
                      showButtons={true}
                      campground={campground}
                      key={campground._id}
                    ></Card>
                  );
                })
              )}
            </FlexWrapper>
          </FlexWrapper>
        )}
      </Container>
    </Layout>
  );
};

export default Profile;
