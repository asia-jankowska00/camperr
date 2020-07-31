import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";

// import { useContext } from "react";
// import { ThemeContext } from "styled-components";

import Button from "./Button";
import Headline from "./Headline";
import Paragraph from "./Paragraph";

const StyledCardWrapper = styled.div(
  (props) => `
      width: ${
        props.theme.width[props.widthStyle]
          ? props.theme.width[props.widthStyle]
          : "100%"
      };
      background: ${props.theme.color.white};
      color: ${props.theme.color.light};
      box-shadow: ${props.theme.style.shadow};
      margin-bottom: ${props.theme.space[2]};
    `
);

const StyledCardImage = styled.div(
  (props) => `
      width: 100%;
      height: 150px;
      background-image: url(${props.image});
      background-size: cover;
      background-repeat: no-repeat;
      color: ${props.theme.color.light};

      @media ${props.theme.device.laptop} {
        height: 200px;
      }
    `
);

const StyledCardContent = styled.div(
  (props) => `
      width: 100%;
      background: ${props.theme.color.white};
      color: ${props.theme.color.dark};
      padding:  ${props.theme.space[2]};
    `
);

const StyledButtonsWrapper = styled.div(
  (props) => `
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      `
);

const Card = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledCardWrapper widthStyle={props.widthStyle}>
      <StyledCardImage image={props.campground.image}></StyledCardImage>
      <StyledCardContent>
        <Headline tag="h5" styles={`text-align: left; margin-top: 0;`}>
          {props.campground.name}
        </Headline>

        <Paragraph>{props.campground.description}</Paragraph>
        <Paragraph>
          Added by:
          {props.campground.author ? props.campground.author.username : null}
        </Paragraph>
        {props.showButtons ? (
          <StyledButtonsWrapper>
            <Button
              linkStyle={true}
              colorStyle={themeContext.color.dark}
              backgroundColorStyle={themeContext.color.transparent}
            >
              Reviews
            </Button>
            <Link to={`/campgrounds/${props.campground._id}`}>
              <Button
                colorStyle={themeContext.color.light}
                backgroundColorStyle={themeContext.color.dark}
                sizeVertialStyle={themeContext.space[0.5]}
                sizeHorizontalStyle={themeContext.space[1.75]}
              >
                View
              </Button>
            </Link>
          </StyledButtonsWrapper>
        ) : null}
      </StyledCardContent>
    </StyledCardWrapper>
  );
};

export default Card;
