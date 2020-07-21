import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import Layout from "../layouts/Layout";
import Container from "../components/Container";
import Headline from "../components/Headline";
import TextInput from "../components/TextInput";
import Paper from "../components/Paper";
import Button from "../components/Button";

const Login = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Layout>
      <Container justifyContent="center">
        <Paper
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Headline marginStyle="0 0 2rem 0">Sign up</Headline>
          <TextInput type="text" label="Username"></TextInput>
          <TextInput type="email" label="E-mail"></TextInput>
          <TextInput type="password" label="Password"></TextInput>
          <Button
            colorStyle={themeContext.color.light}
            backgroundColorStyle={themeContext.color.dark}
            sizeVertialStyle={themeContext.space[0.25]}
            sizeHorizontalStyle={themeContext.space[1]}
          >
            Sign up
          </Button>
        </Paper>
      </Container>
    </Layout>
  );
};

export default Login;
