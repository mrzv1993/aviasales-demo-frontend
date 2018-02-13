import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import PopularWays from "./PopularWays/index";
import BestPrice from "./BestPrice";
import SpecOffers from "./SpecOffers";
import MainArticles from "./MainArticles";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PopularWays />
        <BestPrice />
        <SpecOffers />
        <MainArticles />
      </div>
    );
  }
}

export default App;
