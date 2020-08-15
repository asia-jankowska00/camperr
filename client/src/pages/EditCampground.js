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
import FileInput from "../components/FileInput";

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

  let formData = new FormData();

  return (
    <Layout>
      <Container justifyContent="center">
        <Form
          onSubmit={(e) => {
            e.preventDefault();

            formData.append("name", campground.name);
            formData.append("location", campground.location);
            formData.append("description", campground.description);
            formData.append("image", campground.image);

            // for (var pair of formData.entries()) {
            //   console.log("formdata", pair[0] + ", " + pair[1]);
            // }

            dispatch(updateCampground(id, formData));
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
            ></TextInput>
            <Textarea
              label="Description"
              value={campground.description || ""}
              onChange={(e) =>
                setCampground({ ...campground, description: e.target.value })
              }
            ></Textarea>
            <FileInput
              onChange={(e) => {
                if (e.target.files[0]) {
                  setCampground({
                    ...campground,
                    image: e.target.files[0],
                    imageName: e.target.files[0].name,
                  });
                }
              }}
              chosenFile={campground.imageName}
              type="file"
              label="Image"
            ></FileInput>
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
