import React from "react";
import styled from "styled-components";

import { useContext } from "react";
import { ThemeContext } from "styled-components";

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
      background: ${props.theme.color.black};
      color: ${props.theme.color.light};
      box-shadow: ${props.theme.style.shadow};
    `
);

const StyledCardImage = styled.div(
  (props) => `
      width: 100%;
      height: 300px;
      background-image: url(${props.image});
      background-size: cover;
      background-repeat: no-repeat;
      color: ${props.theme.color.light};
    `
);

const StyledCardContent = styled.div(
  (props) => `
      width: 100%;
      background: ${props.theme.color.light};
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
        <Headline styles={`text-align: left; margin-top: 0;`}>
          {props.campground.name}
        </Headline>
        <Paragraph>{props.campground.description}</Paragraph>
        <StyledButtonsWrapper>
          <Button
            linkStyle={true}
            colorStyle={themeContext.color.dark}
            backgroundColorStyle={themeContext.color.transparent}
          >
            Comments
          </Button>
          <Button
            colorStyle={themeContext.color.light}
            backgroundColorStyle={themeContext.color.dark}
            sizeVertialStyle={themeContext.space[0.75]}
            sizeHorizontalStyle={themeContext.space[2]}
          >
            View
          </Button>
        </StyledButtonsWrapper>
      </StyledCardContent>
    </StyledCardWrapper>
  );
};

export default Card;