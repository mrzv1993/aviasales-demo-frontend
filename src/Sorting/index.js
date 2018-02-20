import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";

const Sorting = styled.section`
  background-color: #eaeaea;
`;

const cards = [
  {
    city: "Краснодар",
    price: "Найти от 1 212 ₽"
  },
  {
    city: "Сочи (Адлер)",
    price: "Найти от 1 334 ₽"
  }
];

const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  background: #f8fcff;
`;

const Icon = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 64px;
  height: 64px;
`;

const Head = styled.h2`
  margin-top: 24px;
  margin-bottom: 32px;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  color: #4a4a4a;
`;

const CitySearch = styled.button`
  display: inline;
  border: none;
  background: transparent;
  color: #00ace2;
`;

export default function() {
  return (
    <Sorting>
      <Card />
    </Sorting>
  );
}
