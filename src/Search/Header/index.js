import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

import prev from "./prev-arrow.svg";

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

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PrevPage = styled.button`
  background-image: url(${prev});
  background-position: center center;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  height: 2rem;
  width: 2rem;
`;

const Flight = styled.div`
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  width: 100%;
  margin-left: 1rem;

  color: #ffffff;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 1rem;
  margin: 0;

  color: #ffffff;
`;

const Date = styled.p`
  font-weight: 500;
  line-height: 1rem;
  font-size: 0.75rem;
  margin: 0.5rem 0 0 0;

  color: #ffffff;
`;

const Value = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 100px;
  padding: 0.5rem 1.25rem;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  color: #ffffff;
`;

const FilterButton = styled.button`
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 1rem;
  max-width: 160px;
  background-color: #00ace2;
  border: none;
  border-radius: 100px;
  padding: 0.75rem 1.25rem;
  font-weight: 900;
  line-height: normal;
  font-size: 1rem;

  color: #ffffff;
`;

export default function() {
  return (
    <Header>
      <FilterButton>Фильтровать</FilterButton>
      <div className="container">
        <div className="row ">
          <div className="col-xs-12">
            <NavBar>
              <Link to="/">
                <PrevPage />
              </Link>
              <Flight>
                <Title>Москва — Барселона</Title>
                <Date>24 фев — 3 март, 1 пассажир</Date>
              </Flight>
              <Value>Rub</Value>
            </NavBar>
          </div>
        </div>
        <div className="row hidden-xs hidden-sm hidden-md hidden-lg hidden-xl">
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
