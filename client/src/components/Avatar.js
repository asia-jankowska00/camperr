import React from "react";
import styled from "styled-components";

const StyledAvatar = styled.div(
  (props) => `
    border-radius: 100px;
    width: 50px;
    height: 50px;
    background-image: url(${props.image});
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: ${props.theme.space[2]}
  `
);

const Avatar = (props) => {
  return <StyledAvatar image={props.image}></StyledAvatar>;
};

export default Avatar;
