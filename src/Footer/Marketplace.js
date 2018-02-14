import React, { Component } from "react";
import styled from "styled-components";
import appStore from "../assets/app-store.svg";
import googlePlay from "../assets/google-play.svg";
import windowsPhone from "../assets/windows-phone.svg";

const MarketList = styled.ul`
  padding: 0.75rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

const AppStore = styled.img``;
const GooglePlay = styled.img``;
const WindowsPhone = styled.img``;

export default function() {
  return (
    <MarketList>
      <li>
        <a href="#">
          <AppStore src={appStore} alt="Aviasales" title="Aviasales" />
        </a>
      </li>
      <li>
        <a href="#">
          <GooglePlay src={googlePlay} alt="Aviasales" title="Aviasales" />
        </a>
      </li>
      <li>
        <a href="#">
          <WindowsPhone src={windowsPhone} alt="Aviasales" title="Aviasales" />
        </a>
      </li>
    </MarketList>
  );
}
