import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styled from "styled-components";
import Header from "./Header";
import TopDestinations from "./TopDestinations";
import BestPrice from "./BestPrice";
import Slider from "./Slider";
import Subscribe from "./Subscribe";
import SpecOffers from "./SpecOffers";
import MainArticles from "./MainArticles";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer";

import HeaderSP from "./HeaderSP";
import Result from "./Result";

const Page = styled.div`
  min-width: 320px;
`;

const Main = () => (
  <Page>
    <Header />
    <TopDestinations />
    <BestPrice />
    <Slider />
    <Subscribe />
    <SpecOffers />
    <MainArticles />
    <DownloadApp />
    <Footer />
  </Page>
);

const Search = () => (
  <Page>
    <HeaderSP />
    <Result />
  </Page>
);

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
