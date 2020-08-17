import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import { useDispatch, useSelector } from "react-redux";

import Paper from "./Paper";
import Paragraph from "./Paragraph";
import Headline from "./Headline";

const StyledBannerImage = styled.div(
  (props) => `
        width: 100%;
        height: 200px;
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

const StyledBannerDescription = styled(Paragraph)(
  (props) => `
    padding:  ${props.theme.space[2]};
    background: ${props.theme.color.light};


  `
);

const Banner = (props) => {
  const themeContext = useContext(ThemeContext);
  const user = useSelector((state) => state.user.user);

  return (
    <Paper
      paddingStyle="0"
      positionStyle="sticky"
      widthStyle="100%"
      topStyle="0"
      flexDirection="column"
    >
      <StyledBannerImage image={user ? user.image : ""}></StyledBannerImage>
      <StyledBannerContent>
        <Headline tag="h3"> {user ? user.username : ""}</Headline>
        <StyledBannerDescription
          backgroundStyle={themeContext.color.light}
          paddingStyle={`${themeContext.space[1]}`}
        >
          {user ? user.description : ""}
        </StyledBannerDescription>
      </StyledBannerContent>
    </Paper>
  );
};

export default Banner;
