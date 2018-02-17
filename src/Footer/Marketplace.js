import React, { Component } from "react";
import styled from "styled-components";
import appStore from "../assets/app-store.svg";
import googlePlay from "../assets/google-play.svg";
import windowsPhone from "../assets/windows-phone.svg";

const MarketPlaces = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: center;
  list-style: none;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Store = styled.li`
  padding: 0.25rem 0;

  @media (min-width: 767px) {
    padding: 0 0.25rem;
  }
`;

const AppStore = styled.img``;
const GooglePlay = styled.img``;
const WindowsPhone = styled.img``;

export default function() {
  return (
    <MarketPlaces>
      <Store>
        <a href="#">
          <AppStore src={appStore} alt="Aviasales" title="Aviasales" />
        </a>
      </Store>
      <Store>
        <a href="#">
          <GooglePlay src={googlePlay} alt="Aviasales" title="Aviasales" />
        </a>
      </Store>
      <Store>
        <a href="#">
          <WindowsPhone src={windowsPhone} alt="Aviasales" title="Aviasales" />
        </a>
      </Store>
    </MarketPlaces>
  );
}
