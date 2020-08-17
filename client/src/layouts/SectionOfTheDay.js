import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCampgroundOfTheDay } from "../actions/campgroundActions";

import Card from "../components/Card";
import Headline from "../components/Headline";
import Container from "../components/Container";

const SectionOfTheDay = (props) => {
  const dispatch = useDispatch();

  const campgroundData = useSelector(
    (state) => state.campground.campgroundOfTheDay
  );

  useEffect(() => {
    dispatch(getCampgroundOfTheDay());
  }, []);

  return campgroundData.name ? (
    <Container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      heightStyle="100vh"
    >
      <Headline tag="h3">Campsite of the day</Headline>
      <Card
        widthStyle="w-3/5"
        campground={campgroundData}
        showButtons={true}
      ></Card>
    </Container>
  ) : null;
};

export default SectionOfTheDay;
