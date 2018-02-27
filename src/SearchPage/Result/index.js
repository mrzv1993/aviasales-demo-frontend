import React from "react";
import styled from "styled-components";

import Card from "./Card";
import SideBar from "../SideBar";

import russia from "./Card/russia-air.png";
import fly from "./Card/fly.png";
import nordwind from "./Card/nord-wind.png";
import nordair from "./Card/nord-air.png";
import redwings from "./Card/red-wings.png";
import baggage from "./Card/baggage.svg";

const Result = styled.section`
  background-color: #eaeaea;
  padding: 1rem 0;
`;

const cards = [
  {
    baggage: baggage,
    leftTicket: "",
    price: "7712 ₽",
    partner: "Clickavia",
    logo: russia,
    timeTo: "00:05 — 03:05",
    totalTimeTo: "5 ч",
    timeFrom: "10:35 — 17:10",
    totalTimeFrom: "4 ч 35 м",
    directTo: "Прямой",
    directFrom: "Прямой"
  },
  {
    baggage: baggage,
    leftTicket: "",
    price: "9269 ₽",
    partner: "Билетик Аэро",
    logo: fly,
    timeTo: "07:30 — 09:50",
    totalTimeTo: "4 ч 20 м",
    timeFrom: "11:20 — 17:35",
    totalTimeFrom: "4 ч 15 м",
    directTo: "Прямой",
    directFrom: "CDG"
  },
  {
    baggage: baggage,
    leftTicket: "",
    price: "8029 ₽",
    partner: "Aviakassa",
    logo: nordwind,
    timeTo: "00:15 — 03:10",
    timeFrom: "10:45 — 17:15",
    totalTimeTo: "4 ч 30 м",
    totalTimeFrom: "4 ч 30 м",
    directTo: "Прямой",
    directFrom: "Прямой"
  },
  {
    baggage: baggage,
    leftTicket: "",
    price: "8164 ₽",
    partner: "Билетик Аэро",
    logo: nordair,
    timeTo: "00:15 — 03:10",
    totalTimeTo: "4 ч 55 м",
    timeFrom: "10:45 — 17:15",
    totalTimeFrom: "4 ч 30 м",
    directTo: "Прямой",
    directFrom: "Прямой"
  },
  {
    baggage: baggage,
    leftTicket: "Осталось 4 билета",
    price: "8240 ₽",
    partner: "Clickavia",
    offerAirFirst: "Svyaznoy Travel",
    offerAirSecond: "Билетик Аэро",
    offerPriceFirst: "9 275 ₽",
    offerPriceSecond: "9 587 ₽",
    offerButton: "+ Еще 4 предложения",
    logo: redwings,
    timeTo: "07:00 — 09:30",
    totalTimeTo: "4 ч 30 м",
    timeFrom: "11:00 — 17:10",
    totalTimeFrom: "4 ч 10 м",
    directTo: "Прямой",
    directFrom: "Прямой"
  },
  {
    baggage: baggage,
    leftTicket: "",
    price: "9108 ₽",
    partner: "Aviakassa",
    logo: russia,
    timeTo: "00:05 — 03:05",
    totalTimeTo: "5 ч",
    timeFrom: "11:00 — 17:10",
    totalTimeFrom: "4 ч 10 м",
    directTo: "Прямой",
    directFrom: "Прямой"
  },
  {
    baggage: baggage,
    leftTicket: "",
    price: "9485 ₽",
    partner: "Aviakassa",
    logo: nordwind,
    timeTo: "00:05 — 03:05",
    totalTimeTo: "5 ч",
    timeFrom: "11:20 — 17:35",
    totalTimeFrom: "4 ч 15 м",
    directTo: "Прямой",
    directFrom: "Прямой"
  }
];

const TopResult = styled.div`
  margin-bottom: 0.5rem;
`;

const Header = styled.h3`
  font-weight: 900;
  font-size: 0.875rem;
  color: #ffffff;
  padding: 0.5rem;
  margin: 0 -0.5rem;

  @media (min-width: 576px) {
    margin: 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Cheapest = Header.extend`
  background-color: #83d40b;
`;

const Fastest = Header.extend`
  background-color: #af7542;
`;

const Best = Header.extend`
  background-color: #c279d1;
`;

export default () => {
  return (
    <Result>
      <div className="container">
        <div className="row">
          <div class="hidden-xs hidden-sm hidden-md col-lg-4 col-xl-3">
            <SideBar />
          </div>
          <div class="col-sm-12 col-lg-8 col-xl-7">
            <TopResult>
              <Cheapest>Самый дешевый 🤑</Cheapest>
              <Card card={cards[0]} />
              <Fastest>Самый быстрый ⚡️</Fastest>
              <Card card={cards[1]} />
              <Best>Лучший билет 😍</Best>
              <Card card={cards[2]} />
            </TopResult>
            <Card card={cards[3]} />
            <Card card={cards[4]} />
            <Card card={cards[5]} />
            <Card card={cards[6]} />
          </div>
        </div>
      </div>
    </Result>
  );
};
