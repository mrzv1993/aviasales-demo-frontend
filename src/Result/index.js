import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Footer from "../Footer";

import russia from "./Card/russia-air.png";
import fly from "./Card/fly.png";
import nordwind from "./Card/nord-wind.png";
import nordair from "./Card/nord-air.png";
import redwings from "./Card/red-wings.png";

const Result = styled.section`
  background-color: #eaeaea;
`;

const cards = [
  {
    price: "7712 ₽",
    logo: russia,
    timeTo: "00:05 — 03:05",
    totalTimeTo: "5 ч",
    timeFrom: "10:35 — 17:10",
    totalTimeFrom: "4 ч 35 м",
    directTo: "Прямой",
    directFrom: "Прямой"
  },
  {
    price: "9269 ₽",
    logo: fly,
    timeTo: "07:30 — 09:50",
    totalTimeTo: "4 ч 20 м",
    timeFrom: "11:20 — 17:35",
    totalTimeFrom: "4 ч 15 м",
    directTo: "Прямой",
    directFrom: "CDG"
  },
  {
    price: "8029 ₽",
    logo: nordwind,
    timeTo: "00:15 — 03:10",
    timeFrom: "10:45 — 17:15",
    totalTimeTo: "4 ч 30 м",
    totalTimeFrom: "4 ч 30 м",
    directTo: "Прямой",
    directFrom: "Прямой"
  },
  {
    price: "8164 ₽",
    logo: nordair,
    timeTo: "00:15 — 03:10",
    totalTimeTo: "4 ч 55 м",
    timeFrom: "10:45 — 17:15",
    totalTimeFrom: "4 ч 30 м",
    directTo: "Прямой",
    directFrom: "Прямой"
  },
  {
    price: "8240 ₽",
    logo: redwings,
    timeTo: "07:00 — 09:30",
    totalTimeTo: "4 ч 30 м",
    timeFrom: "11:00 — 17:10",
    totalTimeFrom: "4 ч 10 м",
    directTo: "Прямой",
    directFrom: "Прямой"
  },
  {
    price: "9108 ₽",
    logo: russia,
    timeTo: "00:05 — 03:05",
    totalTimeTo: "5 ч",
    timeFrom: "11:00 — 17:10",
    totalTimeFrom: "4 ч 10 м",
    directTo: "Прямой",
    directFrom: "Прямой"
  },
  {
    price: "9485 ₽",
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
  margin-top: 1rem;
`;

const Header = styled.h3`
  font-weight: 900;
  font-size: 0.875rem;
  color: #ffffff;
  padding: 0.5rem;
  margin: 0;
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
      <Footer />
    </Result>
  );
};
