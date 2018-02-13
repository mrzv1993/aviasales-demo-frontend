import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import PopularWays from "./PopularWays/index";
import BestPrice from "./BestPrice";
import SpecOffers from "./SpecOffers";
import MainArticles from "./MainArticles";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer/index";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PopularWays />
        <BestPrice />
        <SpecOffers />
        <MainArticles />
        <DownloadApp />
        <Footer />
      </div>
    );
  }
}

export default App;
