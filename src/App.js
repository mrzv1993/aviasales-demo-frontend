import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Footer from "./Footer";

import MainPage from "./MainPage";
import SearchPage from "./SearchPage";

const Page = styled.div`
  min-width: 320px;
`;

const App = () => (
  <Router>
    <Page>
      <Route exact path="/" component={MainPage} />
      <Route path="/search" component={SearchPage} />
      <Footer />
    </Page>
  </Router>
);
export default App;
