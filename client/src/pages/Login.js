import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { Link, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/authActions";

import Layout from "../layouts/Layout";
import Container from "../components/Container";
import Headline from "../components/Headline";
import TextInput from "../components/TextInput";
import Paper from "../components/Paper";
import Button from "../components/Button";
import Form from "../components/Form";
import Error from "../components/Error";

const Login = (props) => {
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [user, setUser] = useState({});

  return (
    <Layout>
      {isAuthenticated ? <Redirect to="/"></Redirect> : null}
      <Container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Error />
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(loginUser(user));
          }}
        >
          <Paper
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Headline tag="h3" marginStyle="0 0 2rem 0">
              Log in
            </Headline>
            <TextInput
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email"
              label="Email"
              required={true}
            ></TextInput>
            <TextInput
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              label="Password"
              required={true}
            ></TextInput>
            <Button
              colorStyle={themeContext.color.light}
              backgroundColorStyle={themeContext.color.dark}
              sizeVertialStyle={themeContext.space[0.25]}
              sizeHorizontalStyle={themeContext.space[1]}
            >
              Log in
            </Button>
            <Link to="/signup">
              <Button
                linkStyle={true}
                colorStyle={themeContext.color.dark}
                backgroundColorStyle={themeContext.color.transparent}
              >
                Sign up
              </Button>
            </Link>
          </Paper>
        </Form>
      </Container>
    </Layout>
  );
};

export default Login;
