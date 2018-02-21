import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Footer from "./Footer";

import Main from "./Main";
import Search from "./Search";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/search" component={Search} />
      <Footer />
    </div>
  </Router>
);
export default App;
