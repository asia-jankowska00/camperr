import React, { useEffect } from "react";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./actions/authActions";
import { clearErrors } from "./actions/errorActions";
import { redirect } from "./actions/routerActions";

import PrivateRoute from "./components/PrivateRoute";
import Homepage from "./pages/Homepage";
import Campgrounds from "./pages/Campgrounds";
import EditCampground from "./pages/EditCampground";
import CreateCampground from "./pages/CreateCampground";
import Campground from "./pages/Campground";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App(props) {
  const dispatch = useDispatch();
  const location = useLocation();

  const errorMsg = useSelector((state) => state.error.msg);
  const redirectTo = useSelector((state) => state.router.redirectTo);

  // const isInitialMount = useRef(true);
  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   } else {
  //     dispatch(loadUser());
  //   }
  // }, [isAuthenticated]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(loadUser());
    }
  }, []);

  useEffect(() => {
    if (errorMsg) dispatch(clearErrors());
    dispatch(redirect(null));
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
        <PrivateRoute path="/campgrounds/new" component={CreateCampground} />
        <Route path="/campgrounds/:id/edit" component={EditCampground} />
        <Route path="/campgrounds/:id" component={Campground} />

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
