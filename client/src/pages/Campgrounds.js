import React, { useState, useContext } from "react";

import Container from "../components/Container";
import Card from "../components/Card";

import Layout from "../layouts/Layout";
import SectionOfTheDay from "../layouts/SectionOfTheDay";

const Campgrounds = (props) => {
  const campgroundsData = [
    {
      _id: 1,
      name: "Campground one",
      image:
        "https://previews.123rf.com/images/wiphawee/wiphawee1510/wiphawee151000008/47324445-the-camsite-in-pine-forest.jpg",
      description: "Its a campy camp",
    },
    {
      _id: 2,
      name: "Campground two",
      image:
        "https://thumbs.dreamstime.com/b/outdoor-tent-forest-camsite-26616028.jpg",
      description: "Its a campier camp",
    },
    {
      _id: 3,
      name: "Campground three",
      image: "https://i.ytimg.com/vi/KAlwkTSwkNA/hqdefault.jpg",
      description: "Its the campiest camp!",
    },
  ];

  //   const [campgrounds, setCampgrounds] = useState(campgroundsData);

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

export default Campgrounds;
