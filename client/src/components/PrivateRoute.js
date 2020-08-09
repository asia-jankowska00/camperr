import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../actions/authActions";

const PrivateRoute = ({ component: Component, ...rest }, props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const errorStatus = useSelector((state) => state.error.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  // const shouldUserMatch = props.matchUser;

  // let userMatch;

  // if (errorStatus === 403) userMatch = false;

  return (
    <Route
      {...rest}
      render={(props) =>
        // shouldUserMatch ? (
        //   userMatch === false ? (
        //     <Redirect to="/login" />
        //   ) : null
        // ) :
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
