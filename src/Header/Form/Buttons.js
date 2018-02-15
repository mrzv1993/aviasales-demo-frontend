import React, { Component } from "react";
import styled from "styled-components";

import calendar from "./calendar.svg";
import arrow from "./arrow.svg";

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 3px;
    width: 100%;
  }

  @media (min-width: 1440px) {
    width: 50%;
  }
`;

const Buttons = styled.button`
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

const DateWrap = styled.div`
  display: inline-block;
  width: 100%;

  @media (max-width: 767px) {
    margin-top: 3px;
  }

  @media (min-width: 768px) {
    margin-right: 1px;
    width: calc(50% - 1px);
  }
  @media (min-width: 1440px) {
    margin: 0 1px;
    width: calc(50% - 2px);
  }
`;

const DepartButton = Buttons.extend`
  margin-right: 1px;
  width: calc(50% - 1px);
  background-image: url(${calendar});

  @media (min-width: 768px) {
    border-bottom-left-radius: 4px;
  }
  @media (min-width: 1440px) {
    border-bottom-left-radius: 0px;
  }
`;

const ReturnButton = Buttons.extend`
  margin-left: 1px;
  width: calc(50% - 1px);
  background-image: url(${calendar});
`;

const PassengerButton = Buttons.extend`
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background-image: url(${arrow});
  background-position: center right 1.2rem;

  @media (max-width: 767px) {
    margin-top: 3px;
  }

  @media (min-width: 768px) {
    border-bottom-left-radius: 0px;
    margin-left: 1px;
    width: calc(50% - 1px);
  }
  @media (min-width: 1440px) {
    border-top-right-radius: 4px;
  }
`;

const Span = styled.span`
  color: #4a4a4a;
`;

export default function() {
  return (
    <Wrapper>
      <DateWrap>
        <DepartButton>Туда</DepartButton>
        <ReturnButton>Обратно</ReturnButton>
      </DateWrap>
      <PassengerButton>
        <Span>1 пассажир,</Span> эконом
      </PassengerButton>
    </Wrapper>
  );
}
