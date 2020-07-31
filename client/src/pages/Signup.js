import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { Link, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/authActions";

import Layout from "../layouts/Layout";
import Container from "../components/Container";
import Headline from "../components/Headline";
import TextInput from "../components/TextInput";
import Paper from "../components/Paper";
import Button from "../components/Button";
import Form from "../components/Form";

const Signup = (props) => {
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [newUser, setNewUser] = useState({});
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    if (error.id === "REGISTER_FAIL") {
      setMsg(error.msg);
    } else {
      setMsg(null);
    }
  }, [error]);

  return (
    <Layout>
      {isAuthenticated ? <Redirect to="/"></Redirect> : null}
      <Container justifyContent="center">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(registerUser(newUser));
          }}
        >
          <Paper
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Headline tag="h3" marginStyle="0 0 2rem 0">
              Sign up
            </Headline>
            <TextInput
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
              type="text"
              label="Username"
              required={true}
            ></TextInput>
            <TextInput
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              type="email"
              label="E-mail"
              required={true}
            ></TextInput>
            <TextInput
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
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
              Sign up
            </Button>
            <Link to="/login">
              <Button
                linkStyle={true}
                colorStyle={themeContext.color.dark}
                backgroundColorStyle={themeContext.color.transparent}
              >
                Log in
              </Button>
            </Link>
          </Paper>
        </Form>
      </Container>
    </Layout>
  );
};

export default Signup;
