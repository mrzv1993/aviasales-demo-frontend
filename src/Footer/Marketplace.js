import React from "react";
import styled from "styled-components";
import appStore from "./app-store.svg";
import googlePlay from "./google-play.svg";
import windowsPhone from "./windows-phone.svg";

const MarketPlaces = styled.div`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  margin-top: 1.5rem;
  flex-flow: column;

  @media (min-width: 576px) {
    flex-flow: row;
  }

  @media (min-width: 1200px) {
    margin-top: 0;
  }
`;

const StoreImg = styled.img`
  margin-bottom: 0.5rem;

  @media (min-width: 576px) {
    margin-right: 0.5rem;
    margin-bottom: 0;
  }
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
