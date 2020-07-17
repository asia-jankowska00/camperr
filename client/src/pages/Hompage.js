import React from "react";

import Layout from "../layouts/Layout";

import SectionImageCover from "../layouts/SectionImageCover";
import SectionThumbnails from "../layouts/SectionThumbnails";
import SectionOfTheDay from "../layouts/SectionOfTheDay";

const Homepage = () => {
  return (
    <Layout>
      <SectionImageCover></SectionImageCover>
      <SectionThumbnails></SectionThumbnails>
      <SectionOfTheDay></SectionOfTheDay>
    </Layout>
  );
};

export default Homepage;
