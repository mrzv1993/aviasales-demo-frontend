import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Directions from "./Directions";
import BestPrice from "./BestPrice";
import Slider from "./Slider";
import Subscribe from "./Subscribe";
import SpecOffers from "./SpecOffers";
import MainArticles from "./MainArticles";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer";

const Page = styled.div`
  min-width: 320px;
`;

class App extends Component {
  render() {
    return (
      <Page>
        <Header />
        <Directions />
        <BestPrice />
        <Slider />
        <Subscribe />
        <SpecOffers />
        <MainArticles />
        <DownloadApp />
        <Footer />
      </Page>
    );
  }
}

export default App;
