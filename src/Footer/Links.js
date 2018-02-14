import React, { Component } from "react";
import styled from "styled-components";
import Marketplace from "./Marketplace";

const Nav = styled.nav`
  display: block;
  width: 100%;
  margin-top: 1rem;

  > a {
    line-height: 16px;
    font-size: 12px;

    color: #5b5b5c;
    text-decoration: none;
    display: inline-block;
    padding: 0.5rem;
  }
`;

const P = styled.p`
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  text-align: center;

  color: #5b5b5c;
`;

const CopyRight = styled.p`
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  text-align: center;

  color: #5b5b5c;
`;

export default function() {
  return (
    <div className="row">
      <div className="col-xs-12">
        <Nav>
          <a href="#">О компании</a>
          <a href="#">Партнерска программа</a>
          <a href="#">Реклама</a>
          <a href="#">Вакансии</a>
          <a href="#">Помощь</a>
          <a href="#">Правила</a>
          <a href="#">White Label авиабилеты</a>
        </Nav>
        <Nav>
          <a href="#">Вконтакте</a>
          <a href="#">Фейсбук</a>
          <a href="#">Инстаграм</a>
          <a href="#">Твиттер</a>
          <a href="#">Вайбер</a>
        </Nav>
        <P>Поиск и бронирование отелей</P>
      </div>
      <div className="col-xs-12">
        <Marketplace />
        <CopyRight>© 2007–2018, Aviasales — дешевые авиабилеты</CopyRight>
      </div>
    </div>
  );
}
