import React, { useContext, useState, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { updateDescription } from "../actions/userActions";

import Paper from "./Paper";
import Paragraph from "./Paragraph";
import Headline from "./Headline";
import Button from "./Button";
import FlexWrapper from "./FlexWrapper";
import Textarea from "./Textarea";
import Form from "./Form";

const StyledBannerWrapper = styled.div(
  (props) => `
    width: 100%;
    background: ${props.theme.color.white};
    color: ${props.theme.color.dark};
    padding: ${props.paddingStyle ? props.paddingStyle : props.theme.space[2]};
    box-shadow: ${props.theme.style.shadow};
    margin-bottom: ${props.theme.space[2]};
    display: flex;
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    flex-direction: row;
    position: ${props.positionStyle};
    margin: ${props.marginStyle};
    top: 0;

    
  @media ${props.theme.device.tablet} {
    flex-direction: column;
  }
  `
);

const StyledBannerImage = styled.div(
  (props) => `
        width: 100%;
        height: 225px;
        background-image: url(/files/${props.image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        color: ${props.theme.color.light};
  
        @media ${props.theme.device.laptop} {
          height: 300px;
        }
      `
);

const StyledBannerContent = styled.div(
  (props) => `
        width: 100%;
        background: ${props.theme.color.white};
        color: ${props.theme.color.dark};
        padding:  ${props.theme.space[2]};
      `
);

const Banner = (props) => {
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const currentUser = useSelector((state) => state.auth.user);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isUserAuthor, setIsUserAuthor] = useState(false);

  const [isDescriptionFormOpen, setIsDescriptionFormOpen] = useState(false);
  const [description, setDescription] = useState({});

  const setIsAvatarModalOpen = props.setIsAvatarModalOpen;

  useEffect(() => {
    if (currentUser && user) {
      currentUser._id === user._id
        ? setIsUserAuthor(true)
        : setIsUserAuthor(false);
    }
  }, [currentUser, user]);

  useEffect(() => {
    if (user)
      setDescription({
        description: user.description,
        author: user._id,
      });
  }, [isDescriptionFormOpen]);

  return (
    <React.Fragment>
      <StyledBannerWrapper
        paddingStyle="0"
        positionStyle="sticky"
        widthStyle="100%"
        topStyle="0"
      >
        <StyledBannerImage image={user ? user.image : ""}>
          {isAuthenticated && isUserAuthor ? (
            <FlexWrapper justifyContent="flex-end">
              {" "}
              <Button
                marginStyle={"0 0 2rem 0"}
                linkStyle={true}
                colorStyle={themeContext.color.dark}
                onClick={() => {
                  setIsAvatarModalOpen(true);
                }}
              >
                Edit
              </Button>
            </FlexWrapper>
          ) : null}
        </StyledBannerImage>
        <StyledBannerContent>
          <Headline tag="h3"> {user ? user.username : ""}</Headline>

          <FlexWrapper
            backgroundStyle={themeContext.color.light}
            paddingStyle={`${themeContext.space[1]}`}
          >
            {isAuthenticated && isUserAuthor ? (
              <FlexWrapper justifyContent="flex-end">
                {" "}
                <Button
                  marginStyle={"0 0 2rem 0"}
                  linkStyle={true}
                  colorStyle={themeContext.color.dark}
                  onClick={() => {
                    setIsDescriptionFormOpen(!isDescriptionFormOpen);
                  }}
                >
                  {isDescriptionFormOpen ? "Cancel" : "Edit"}
                </Button>
              </FlexWrapper>
            ) : null}
            {user && !isDescriptionFormOpen ? (
              <Paragraph>{user.description}</Paragraph>
            ) : user ? (
              <Form
                onSubmit={(e) => {
                  e.preventDefault();

                  dispatch(updateDescription(user._id, description));
                  setIsDescriptionFormOpen(false);
                }}
              >
                <Textarea
                  value={description.description || ""}
                  onChange={(e) => {
                    setDescription({
                      ...description,
                      description: e.target.value,
                    });
                  }}
                ></Textarea>
                <Button
                  colorStyle={themeContext.color.light}
                  backgroundColorStyle={themeContext.color.dark}
                  sizeVertialStyle={themeContext.space[0.5]}
                  sizeHorizontalStyle={themeContext.space[1.75]}
                >
                  Submit
                </Button>
              </Form>
            ) : null}
            {/* {user ? user.description : ""} */}
          </FlexWrapper>
        </StyledBannerContent>
      </StyledBannerWrapper>
    </React.Fragment>
  );
};

export default Banner;
