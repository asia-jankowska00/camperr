import React from "react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import Headline from "../components/Headline";
import Thumbnail from "../components/Thumbnail";
import Container from "../components/Container";
import Paragraph from "../components/Paragraph";

const SectionThumbnails = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      heightStyle="100vh"
    >
      <Headline styles={`color: ${themeContext.color.dark};`}>
        The perfect place to find a new trip
      </Headline>
      <Paragraph>
        Share your favorite camping spots with other camping enthusiasts, write
        reviews and find new places to go to. Try it our for yourself!
      </Paragraph>
      <Container
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
      >
        <Thumbnail title="Title" linkText="Browse" />
        <Thumbnail title="Title" linkText="Browse" />
        <Thumbnail title="Title" linkText="Browse" />
      </Container>
    </Container>
  );
};

export default SectionThumbnails;
