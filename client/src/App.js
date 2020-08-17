import React, { useEffect } from "react";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./actions/authActions";
import { clearErrors } from "./actions/errorActions";
import { redirect, clearRedirect } from "./actions/routerActions";

import PrivateRoute from "./components/PrivateRoute";
import Homepage from "./pages/Homepage";
import Campgrounds from "./pages/Campgrounds";
import EditCampground from "./pages/EditCampground";
import CreateCampground from "./pages/CreateCampground";
import Campground from "./pages/Campground";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

function App(props) {
  const dispatch = useDispatch();
  const location = useLocation();

  const errorHasShown = useSelector((state) => state.error.hasShown);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const redirectTo = useSelector((state) => state.router.redirectTo);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(loadUser());
    }
  }, []);

  useEffect(() => {
    if (errorHasShown) {
      dispatch(clearErrors());
    }
    dispatch(clearRedirect());
  }, [location]);

  return (
    <React.Fragment>
      {redirectTo ? (
        <React.Fragment>
          <Redirect to={redirectTo}></Redirect>
        </React.Fragment>
      ) : null}
      <Switch>
        <Route path="/" exact component={Homepage} />

        <Route path="/campgrounds" exact component={Campgrounds} />
        <Route
          path="/campgrounds/category/:categoryId"
          exact
          component={Campgrounds}
        />
        <PrivateRoute path="/campgrounds/new" component={CreateCampground} />
        <PrivateRoute
          path="/campgrounds/:id/edit"
          matchUser={true}
          component={EditCampground}
        />
        <Route path="/campgrounds/:id" component={Campground} />

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
