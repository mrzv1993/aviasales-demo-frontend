import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import PopularWays from "./PopularWays";
import BestPrice from "./BestPrice";
import Slider from "./Slider";
import SpecOffers from "./SpecOffers";
import MainArticles from "./MainArticles";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer";

const MainWrapper = styled.div`
  min-width: 320px;
`;

class App extends Component {
  render() {
    return (
      <MainWrapper>
        <Header />
        <PopularWays />
        <BestPrice />
        <Slider />
        <SpecOffers />
        <MainArticles />
        <DownloadApp />
        <Footer />
      </MainWrapper>
    );
  }
}

export default App;
