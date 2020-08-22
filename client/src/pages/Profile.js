import React, { useEffect, useState } from "react";

import { getCampgroundsByUser } from "../actions/campgroundActions";
import { getUser, updateAvatar } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import Container from "../components/Container";
import Card from "../components/Card";

import FlexWrapper from "../components/FlexWrapper";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Headline from "../components/Headline";
import Banner from "../components/Banner";
import FileInput from "../components/FileInput";

import Layout from "../layouts/Layout";

const Profile = (props) => {
  const dispatch = useDispatch();

  const campgroundsData = useSelector((state) => state.campground.campgrounds);
  const isLoading = useSelector((state) => state.campground.loading);

  const currentUser = useSelector((state) => state.auth.user);
  const user = useSelector((state) => state.user.user);

  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [avatar, setAvatar] = useState({});

  useEffect(() => {
    // if (currentUser) {
    dispatch(getCampgroundsByUser(props.match.params.userId));
    dispatch(getUser(props.match.params.userId));
    // }
  }, []);

  useEffect(() => {
    if (user)
      setAvatar({
        author: user._id,
      });
  }, [isAvatarModalOpen]);

  let formData = new FormData();

  return (
    <Layout>
      <Modal
        setIsModalOpen={setIsAvatarModalOpen}
        isModalOpen={isAvatarModalOpen}
        onConfirm={() => {
          formData.append("author", avatar.author);
          formData.append("image", avatar.image);

          dispatch(updateAvatar(user._id, formData));
        }}
        bodyText=""
        titleText="Change avatar"
      >
        <FileInput
          onChange={(e) => {
            if (e.target.files[0]) {
              // formData.append("image", e.target.files[0]);

              setAvatar({
                ...avatar,
                image: e.target.files[0],
                imageName: e.target.files[0].name,
              });
            }
          }}
          chosenFile={avatar.imageName}
          type="file"
          required={true}
        ></FileInput>
      </Modal>

      <Container justifyContent="space-between" flexWrap="wrap">
        {isLoading ? (
          <FlexWrapper justifyContent="center">
            <Loader></Loader>
          </FlexWrapper>
        ) : (
          <FlexWrapper
            flexDirection="column"
            tablet="flex-direction: row;"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <FlexWrapper
              tablet="width: 25%"
              widthStyle="100%"
              alignItems="flex-start"
            >
              <Banner setIsAvatarModalOpen={setIsAvatarModalOpen}></Banner>
            </FlexWrapper>
            <FlexWrapper
              tablet="width: 65%"
              widthStyle="100%"
              justifyContent="space-between"
            >
              <Headline fullWidth={true} tag="h3">
                {user ? `${user.username}'s campgrounds` : ""}
              </Headline>
              {isLoading ? (
                <FlexWrapper justifyContent="center">
                  <Loader></Loader>
                </FlexWrapper>
              ) : (
                campgroundsData.map((campground) => {
                  return (
                    <Card
                      widthStyle="w-46%"
                      showButtons={true}
                      campground={campground}
                      key={campground._id}
                    ></Card>
                  );
                })
              )}
            </FlexWrapper>
          </FlexWrapper>
        )}
      </Container>
    </Layout>
  );
};

export default Profile;
