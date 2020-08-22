import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";
import Headline from "./Headline";
import Paragraph from "./Paragraph";
import Rating from "./Rating";
import MapPin from "./MapPin";
import Label from "./Label";

const StyledCardWrapper = styled.div(
  (props) => `
      width: 100%;
      background: ${props.theme.color.white};
      color: ${props.theme.color.light};
      box-shadow: ${props.theme.style.shadow};
      margin-bottom: ${props.theme.space[2]};

      order: ${props.orderMobile ? props.orderMobile : ""};

      @media ${props.theme.device.tablet} {
       order: unset;
     }


      @media ${props.theme.device.tablet} {
        width: ${
          props.theme.width[props.widthStyle]
            ? props.theme.width[props.widthStyle]
            : "100%"
        };
      }
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
        justify-content: ${
          props.data.categories && props.data.categories.length
            ? "space-between"
            : "flex-end"
        };
        align-items: center;
        flex-wrap: wrap;
      `
);

const Card = (props) => {
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();
  const data = props.campground;
  const categories = useSelector((state) => state.categories.categories);

  return (
    <StyledCardWrapper size={props.size} widthStyle={props.widthStyle}>
      <StyledCardImage
        image={data.image ? `${data.image}` : ""}
        size={props.size}
      ></StyledCardImage>
      <StyledCardContent>
        <Headline tag="h5" styles={`text-align: left; margin-top: 0;`}>
          {data.name}
        </Headline>
        <Rating rating={data.ratingAverage}></Rating>

        <Paragraph marginStyle="2rem 0">{data.description}</Paragraph>

        <Paragraph>
          <MapPin centered={false} size="20"></MapPin>
          {data.location}
        </Paragraph>

        {data.author ? (
          <Paragraph colorStyle={themeContext.color.grey_med}>
            Added by:{" "}
            <Link to={`/profile/${data.author.id}`}>
              {data.author.username}
            </Link>{" "}
            on {moment(data.createdAt).format("MMMM Do YYYY")}
          </Paragraph>
        ) : null}

        <StyledButtonsWrapper data={data}>
          {categories && data.categories
            ? categories
                .filter((matchWithCategory) =>
                  data.categories.includes(matchWithCategory._id)
                )
                .map((matchedCategory, index) => {
                  return <Label key={index}>{matchedCategory.name}</Label>;
                })
            : null}
          {props.showButtons ? (
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
          ) : null}
        </StyledButtonsWrapper>
      </StyledCardContent>
    </StyledCardWrapper>
  );
};

export default Card;
