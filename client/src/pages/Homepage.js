import React from "react";

import Layout from "../layouts/Layout";

import SectionImageCover from "../layouts/SectionImageCover";
import SectionCategories from "../layouts/SectionCategories";
import SectionOfTheDay from "../layouts/SectionOfTheDay";

const Homepage = () => {
  return (
    <Layout>
      <SectionImageCover></SectionImageCover>
      <SectionCategories></SectionCategories>
      <SectionOfTheDay></SectionOfTheDay>
    </Layout>
  );
};

export default Homepage;
