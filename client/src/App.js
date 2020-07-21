import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Homepage from "./pages/Hompage";
import Campgrounds from "./pages/Campgrounds";
import EditCampground from "./pages/EditCampground";
import CreateCampground from "./pages/CreateCampground";
import Campground from "./pages/Campground";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/campgrounds" exact component={Campgrounds} />
        <Route path="/campgrounds/:id" component={Campground} />
        <Route path="/campgrounds/:id/edit" component={EditCampground} />
        <Route path="/campgrounds/new" component={CreateCampground} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
    </Provider>
  );
}

export default App;
