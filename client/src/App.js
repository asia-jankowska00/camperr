import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./pages/Hompage";
import Campgrounds from "./pages/Campgrounds";
import Login from "./pages/Login";

function App(props) {
  return (
    <Router>
      <Route path="/" exact component={Homepage} />
      <Route path="/campgrounds" exact component={Campgrounds} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
