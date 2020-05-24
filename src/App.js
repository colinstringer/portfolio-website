import React from "react";
import { Switch, Route } from "react-router-dom";

import Resume from "./pages/Resume/index";
import Home from "./pages/Home";
import Motivation from "./pages/Motivation";
import Achievement from "./pages/Achievement";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/motivation">
          <Motivation />
        </Route>
        <Route path="/achievement">
          <Achievement />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
