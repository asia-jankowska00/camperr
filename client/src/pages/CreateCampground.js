import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { addCampground } from "../actions/campgroundActions";

import Layout from "../layouts/Layout";
import Container from "../components/Container";
import Headline from "../components/Headline";
import TextInput from "../components/TextInput";
import Textarea from "../components/Textarea";
import Paper from "../components/Paper";
import Button from "../components/Button";
import Form from "../components/Form";

const CreateCampground = (props) => {
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.user);

  const [campground, setCampground] = useState({
    author: {
      id: currentUser._id,
      username: currentUser.username,
    },
  });

  return (
    <Layout>
      <Container justifyContent="center">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addCampground(campground));
          }}
        >
          <Paper
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Headline tag="h3" marginStyle="0 0 2rem 0">
              Add new campground
            </Headline>
            <TextInput
              onChange={(e) =>
                setCampground({ ...campground, name: e.target.value })
              }
              type="text"
              label="Campground name"
              required={true}
            ></TextInput>
            <Textarea
              label="Description"
              required={true}
              onChange={(e) =>
                setCampground({ ...campground, description: e.target.value })
              }
            ></Textarea>
            <TextInput
              onChange={(e) =>
                setCampground({ ...campground, image: e.target.value })
              }
              type="text"
              label="Image url"
              required={true}
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
        </Form>
      </Container>
    </Layout>
  );
};

export default CreateCampground;