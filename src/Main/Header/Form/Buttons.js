import React, { Component } from "react";
import styled from "styled-components";

import calendar from "./calendar.svg";
import arrow from "./arrow.svg";

const Buttons = styled.div`
  display: inline-block;
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 3px;
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

const Button = styled.button`
  padding: 1.15rem 1rem;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center right 1rem;
  border: none;
  width: 100%;

  line-height: 20px;
  font-size: 16px;

  color: #a0b0b9;
  text-align: left;
`;

const DateButton = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 3px;

  @media (min-width: 768px) {
    margin-right: 1px;
    width: calc(50% - 1px);
    margin-top: 0;
  }
  @media (min-width: 1200px) {
    margin: 0 1px;
    width: calc(50% - 2px);
  }
`;

const Depart = Button.extend`
  margin-right: 1px;
  width: calc(50% - 1px);
  background-image: url(${calendar});

  @media (min-width: 768px) {
    border-bottom-left-radius: 4px;
  }
  @media (min-width: 1200px) {
    border-bottom-left-radius: 0px;
  }
`;

const Return = Button.extend`
  margin-left: 1px;
  width: calc(50% - 1px);
  background-image: url(${calendar});
`;

const PassengerButton = Button.extend`
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background-image: url(${arrow});
  background-position: center right 1.2rem;
  margin-top: 3px;

  @media (min-width: 767px) {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    border-bottom-left-radius: 0px;
    margin-left: 1px;
    width: calc(50% - 1px);
  }
  @media (min-width: 1200px) {
    border-top-right-radius: 4px;
  }
`;

const Quantity = styled.span`
  color: #4a4a4a;
`;

export default function() {
  return (
    <Buttons>
      <DateButton>
        <Depart>Туда</Depart>
        <Return>Обратно</Return>
      </DateButton>
      <PassengerButton>
        <Quantity>1 пассажир,</Quantity> эконом
      </PassengerButton>
    </Buttons>
  );
}
