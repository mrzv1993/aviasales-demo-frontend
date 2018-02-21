import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Main from "./Main";
import Search from "./Search";

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">main page</Link>
        </li>
        <li>
          <Link to="/search">search</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Main} />
      <Route path="/search" component={Search} />
    </div>
  </Router>
);
export default App;
