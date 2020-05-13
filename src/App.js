import React from "react";
import { Switch, Route } from "react-router-dom";

import Resume from "./pages/Resume/index";
import Home from "./pages/Home";
import Letter from "./pages/Letter";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/letter">
          <Letter />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
