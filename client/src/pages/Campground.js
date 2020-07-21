import React, { useState, useContext, useEffect } from "react";

import { connect } from "react-redux";
import { getCampgrounds } from "../actions/campgroundActions";
import { useDispatch, useSelector } from "react-redux";

import Container from "../components/Container";
import Card from "../components/Card";

import Layout from "../layouts/Layout";
import SectionOfTheDay from "../layouts/SectionOfTheDay";

const Campground = (props) => {
  const campgroundsData = useSelector((state) => state.campground.campgrounds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampgrounds());
  }, []);

  return (
    <Layout>
      <Container justifyContent="space-between" flexWrap="wrap">
        {campgroundsData.map((campground) => {
          return (
            <Card
              widthStyle="w-30%"
              campground={campground}
              key={campground._id}
            ></Card>
          );
        })}
      </Container>
      <SectionOfTheDay></SectionOfTheDay>
    </Layout>
  );
};

export default Campground;
