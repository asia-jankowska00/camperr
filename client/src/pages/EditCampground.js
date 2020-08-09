import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";

import { getCampground, updateCampground } from "../actions/campgroundActions";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../layouts/Layout";
import Container from "../components/Container";
import Headline from "../components/Headline";
import TextInput from "../components/TextInput";
import Textarea from "../components/Textarea";
import Paper from "../components/Paper";
import Button from "../components/Button";
import Form from "../components/Form";

const EditCampground = (props) => {
  const themeContext = useContext(ThemeContext);

  const dispatch = useDispatch();
  const id = props.match.params.id;
  const campgroundData = useSelector((state) => state.campground.campground);

  const [campground, setCampground] = useState({ campgroundData });

  useEffect(() => {
    dispatch(getCampground(id));
  }, []);

  useEffect(() => {
    setCampground(campgroundData);
  }, [campgroundData]);

  return (
    <Layout>
      <Container justifyContent="center">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(updateCampground(id, campground));
          }}
        >
          <Paper
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Headline tag="h3" marginStyle="0 0 2rem 0">
              Edit campground
            </Headline>
            <TextInput
              type="text"
              label="Campground name"
              value={campground.name || ""}
              onChange={(e) =>
                setCampground({ ...campground, name: e.target.value })
              }
            ></TextInput>
            <TextInput
              onChange={(e) =>
                setCampground({ ...campground, location: e.target.value })
              }
              type="text"
              value={campground.location || ""}
              label="Location"
              required={true}
            ></TextInput>
            <Textarea
              label="Description"
              value={campground.description || ""}
              onChange={(e) =>
                setCampground({ ...campground, description: e.target.value })
              }
            ></Textarea>
            <TextInput
              type="text"
              label="Image url"
              value={campground.image || ""}
              onChange={(e) =>
                setCampground({ ...campground, image: e.target.value })
              }
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

export default EditCampground;
