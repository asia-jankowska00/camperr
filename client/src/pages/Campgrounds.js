import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { getCampgrounds } from "../actions/campgroundActions";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "styled-components";

import Container from "../components/Container";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Loader from "../components/Loader";

import Layout from "../layouts/Layout";
import FlexWrapper from "../components/FlexWrapper";
import Button from "../components/Button";

const Campgrounds = (props) => {
  const themeContext = useContext(ThemeContext);
  const campgroundsData = useSelector((state) => state.campground.campgrounds);
  const isLoading = useSelector((state) => state.campground.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampgrounds());
  }, []);

  return (
    <Layout>
      <Container justifyContent="space-between" flexWrap="wrap">
        <FlexWrapper justifyContent="space-between" alignItems="center">
          <Categories></Categories>
          <Link to="/campgrounds/new">
            <Button
              colorStyle={themeContext.color.light}
              backgroundColorStyle={themeContext.color.dark}
              sizeVertialStyle={themeContext.space[0.75]}
              sizeHorizontalStyle={themeContext.space[2]}
            >
              Add campground
            </Button>
          </Link>
        </FlexWrapper>
        {isLoading ? (
          <FlexWrapper justifyContent="center">
            <Loader></Loader>
          </FlexWrapper>
        ) : (
          ""
        )}

        {campgroundsData.map((campground) => {
          return (
            <Card
              widthStyle="w-30%"
              showButtons={true}
              campground={campground}
              key={campground._id}
            ></Card>
          );
        })}
      </Container>
    </Layout>
  );
};

export default Campgrounds;
