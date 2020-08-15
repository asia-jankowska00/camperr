import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";

import { useDispatch } from "react-redux";
import { scrollToReviews } from "../actions/routerActions";

import Button from "./Button";
import Headline from "./Headline";
import Paragraph from "./Paragraph";
import Rating from "./Rating";

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
      height: ${props.size === "large" ? "300px" : "150px"};
      background-image: url(/files/${props.image});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: ${props.theme.color.light};

      @media ${props.theme.device.laptop} {
        height: ${props.size === "large" ? "400px" : "200px"};
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
  const dispatch = useDispatch();
  const data = props.campground;

  return (
    <StyledCardWrapper widthStyle={props.widthStyle}>
      <StyledCardImage
        image={data.image ? `${data.image}` : ""}
        size={props.size}
      ></StyledCardImage>
      <StyledCardContent>
        <Headline tag="h5" styles={`text-align: left; margin-top: 0;`}>
          {data.name}
        </Headline>
        <Rating rating={data.ratingAverage}></Rating>

        <Paragraph>{data.description}</Paragraph>
        <Paragraph>{data.location}</Paragraph>
        <Paragraph>
          Added by:
          {data.author ? data.author.username : null}
        </Paragraph>
        {props.showButtons ? (
          <StyledButtonsWrapper>
            <Link to={`/campgrounds/${data._id}`}>
              <Button
                linkStyle={true}
                colorStyle={themeContext.color.dark}
                backgroundColorStyle={themeContext.color.transparent}
                onClick={() => dispatch(scrollToReviews())}
              >
                Reviews
              </Button>
            </Link>
            <Link to={`/campgrounds/${data._id}`}>
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
