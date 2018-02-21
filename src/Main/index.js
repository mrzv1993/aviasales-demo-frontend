import React, { Component } from "react";
import styled from "styled-components";

import Header from "./Header";
import TopDestinations from "./TopDestinations";
import BestPrice from "./BestPrice";
import Slider from "./Slider";
import Subscribe from "./Subscribe";
import SpecOffers from "./SpecOffers";
import MainArticles from "./MainArticles";
import DownloadApp from "./DownloadApp";

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
  </Page>
);
export default Main;
