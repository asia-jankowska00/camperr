import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { Link, useHistory } from "react-router-dom";

import { getCampground, deleteCampground } from "../actions/campgroundActions";
import { useDispatch, useSelector } from "react-redux";

import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";
import FlexWrapper from "../components/FlexWrapper";
import Loader from "../components/Loader";
import Alert from "../components/Alert";
import Modal from "../components/Modal";
import Paper from "../components/Paper";
import Headline from "../components/Headline";
import Review from "../components/Review";

import Layout from "../layouts/Layout";

const Campground = (props) => {
  const themeContext = useContext(ThemeContext);

  const campgroundData = useSelector((state) => state.campground.campground);
  const isLoading = useSelector((state) => state.campground.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getCampground(id));
  }, []);

  return (
    <Layout>
      <Modal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        onConfirm={() => dispatch(deleteCampground(id))}
        bodyText=""
        titleText="Do you want to delete this campground?"
      ></Modal>
      <Container justifyContent="space-between" flexWrap="wrap">
        {/* <FlexWrapper justifyContent="center">
          <Alert type="success">Alert</Alert>
        </FlexWrapper> */}
        {isLoading ? (
          <FlexWrapper justifyContent="center">
            <Loader></Loader>
          </FlexWrapper>
        ) : (
          <React.Fragment>
            <FlexWrapper justifyContent="space-between">
              {isAuthenticated ? (
                <FlexWrapper justifyContent="flex-end">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    marginStyle={"0 2rem 2rem 0"}
                    linkStyle={true}
                    colorStyle={themeContext.color.warning}
                  >
                    Delete
                  </Button>
                  <Link to={`/campgrounds/${id}/edit`}>
                    <Button
                      marginStyle={"0 0 2rem 0"}
                      linkStyle={true}
                      colorStyle={themeContext.color.dark}
                    >
                      Edit
                    </Button>
                  </Link>
                </FlexWrapper>
              ) : null}
              <Paper marginStyle="0 2rem 2rem 0" widthStyle="w-1/4"></Paper>
              <Card
                widthStyle="w-2/3"
                campground={campgroundData}
                key={id}
              ></Card>
            </FlexWrapper>
            <FlexWrapper justifyContent="flex-end">
              <Paper flexDirection="column" widthStyle="w-2/3">
                <Headline marginStyle="0 0 2rem 0" tag="h5">
                  Reviews
                </Headline>
                <Review></Review>
              </Paper>
            </FlexWrapper>
          </React.Fragment>
        )}
      </Container>
    </Layout>
  );
};

export default Campground;
