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

  // const campground = {
  //   _id: 0,
  //   name: "Campground title",
  //   description: `Push your water glass on the floor meow and walk away sleep in the
  //   bathroom sink. Good morning sunshine more napping, more napping all
  //   the napping is exhausting and find empty spot in cupboard and sleep
  //   all day. Lies down sleep everywhere, but not in my bed for proudly
  //   present butt to human or fart in owners food touch my tail, i shred
  //   your hand purrrr or side-eyes your "jerk" other hand while being
  //   petted.`,
  //   image: "https://i.ytimg.com/vi/KAlwkTSwkNA/hqdefault.jpg",
  // };

  return (
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
  );
};

export default SectionOfTheDay;
