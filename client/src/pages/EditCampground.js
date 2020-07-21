import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import Layout from "../layouts/Layout";
import Container from "../components/Container";
import Headline from "../components/Headline";
import TextInput from "../components/TextInput";
import Textarea from "../components/Textarea";
import Paper from "../components/Paper";
import Button from "../components/Button";

const EditCampground = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Layout>
      <Container justifyContent="center">
        <Paper
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Headline marginStyle="0 0 2rem 0">Add new campground</Headline>
          <TextInput
            type="text"
            label="Campground name"
            value={"Prefilled value"}
          ></TextInput>
          <Textarea label="Description" value={"Prefilled value"}></Textarea>
          <TextInput
            type="text"
            label="Image url"
            value={"Prefilled value"}
          ></TextInput>
          <Button
            colorStyle={themeContext.color.light}
            backgroundColorStyle={themeContext.color.dark}
            sizeVertialStyle={themeContext.space[0.25]}
            sizeHorizontalStyle={themeContext.space[1]}
          >
            Submit
          </Button>
        </Paper>
      </Container>
    </Layout>
  );
};

export default EditCampground;
