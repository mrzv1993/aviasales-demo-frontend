import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Footer from "./Footer";

import Main from "./Main";
import Search from "./Search";

const Page = styled.div`
  min-width: 320px;
`;

const App = () => (
  <Router>
    <Page>
      <Route exact path="/" component={Main} />
      <Route path="/search" component={Search} />
      {/*<Footer />*/}
    </Page>
  </Router>
);
export default App;
