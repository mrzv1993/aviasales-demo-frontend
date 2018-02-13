import React, { Component } from "react";
import styled from "styled-components";
import Marketplace from "./Marketplace";

export default function() {
  return (
    <div className="row">
      <div className="col-xs-12">
        <nav>
          <a href="#">О компании</a>
          <a href="#">Партнерска программа</a>
          <a href="#">Реклама</a>
          <a href="#">Вакансии</a>
          <a href="#">Помощь</a>
          <a href="#">Правила</a>
          <a href="#">White Label авиабилеты</a>
        </nav>
        <nav>
          <a href="#">Вконтакте</a>
          <a href="#">Фейсбук</a>
          <a href="#">Инстаграм</a>
          <a href="#">Твиттер</a>
          <a href="#">Вайбер</a>
        </nav>
        <p>Поиск и бронирование отелей</p>
      </div>
      <div className="col-xs-12">
        <Marketplace />
        <p>© 2007–2018, Aviasales — дешевые авиабилеты</p>
      </div>
    </div>
  );
}
