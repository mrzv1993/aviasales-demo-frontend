import React, { Component } from "react";
import styled from "styled-components";

const Header = styled.header`
  padding: 0.5rem 0;
  background: linear-gradient(
    100deg,
    #00b0de -46.32%,
    #01aedc -42.65%,
    #02abdb -38.93%,
    #02abdb -35.24%,
    #02abdb -35.02%,
    #196ebd 52.98%
  );
`;

const PrevPage = styled.button``;

const Flight = styled.div``;

const Title = styled.h2``;

const Date = styled.p``;

const Value = styled.button``;

export default function() {
  return (
    <Header>
      <div className="container">
        <div className="row hidden-sm hidden-md hidden-lg hidden-xl">
          <div className="col-xs-12">
            <PrevPage>strelks</PrevPage>
            <Flight>
              <Title>Москва — Барселона</Title>
              <Date>24 фев — 3 март, 1 пассажир</Date>
            </Flight>
            <Value>RUB</Value>
          </div>
        </div>
        <div className="row hidden-xs">
          <div className="col-xs-12">
            <div>kjuj</div>
            <Value>RUB</Value>
            <Value>RUB</Value>
            <Value>RUB</Value>
          </div>
        </div>
      </div>
    </Header>
  );
}
