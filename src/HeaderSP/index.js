import React, { Component } from "react";
import styled from "styled-components";

const Header = styled.header`
  padding: 0.5rem 0;
  background: linear-gradient(148.48deg, #079dd4 22.46%, #196ebd 122.26%);
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
