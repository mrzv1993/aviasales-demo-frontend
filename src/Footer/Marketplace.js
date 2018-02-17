import React, { Component } from "react";
import styled from "styled-components";
import appStore from "../assets/app-store.svg";
import googlePlay from "../assets/google-play.svg";
import windowsPhone from "../assets/windows-phone.svg";

const MarketPlaces = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: center;
  list-style: none;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const StoreImg = styled.img`
  margin-left: 0.5rem;
`;

const AppStore = StoreImg.extend``;
const GooglePlay = StoreImg.extend``;
const WindowsPhone = StoreImg.extend``;

export default function() {
  return (
    <MarketPlaces>
      <a href="#">
        <AppStore src={appStore} alt="Aviasales" title="Aviasales" />
      </a>
      <a href="#">
        <GooglePlay src={googlePlay} alt="Aviasales" title="Aviasales" />
      </a>
      <a href="#">
        <WindowsPhone src={windowsPhone} alt="Aviasales" title="Aviasales" />
      </a>
    </MarketPlaces>
  );
}
