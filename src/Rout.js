import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./Form/Form";
import Homepage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import ErrorPage from "./Pages/ErrorPage";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/home" component={Homepage} />
        <Route path="/registration" component={SignUpPage} />
        <Route path="/error" component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
