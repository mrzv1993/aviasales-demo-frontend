import React, { Component } from "react";
import styled from "styled-components";

const ListWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.li`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
`;

const List = styled.ul`
  list-style: none;
`;

export default function() {
  return (
    <div className="row">
      <div className="col-xs-12 col-md-6 col-lg-4">
        <ListWrap>
          <List>
            <Title>Страны</Title>
            <li>Россия</li>
            <li>Тайланд</li>
            <li>Черногория</li>
            <li>Кипр</li>
            <li>Болгария</li>
            <li>Грузия</li>
            <li>Все страны</li>
          </List>
          <List>
            <Title>Города</Title>
            <li>Москва</li>
            <li>Санкт-Петербург</li>
            <li>Симферополь</li>
            <li>Адлер</li>
            <li>Екатеренбург</li>
            <li>Лондон</li>
            <li>Все города</li>
          </List>
        </ListWrap>
      </div>
      <div className="col-xs-12 col-md-6 col-lg-4">
        <ListWrap>
          <List>
            <Title>Авиакомпании</Title>
            <li>Air Berlin</li>
            <li>Air France</li>
            <li>Alitalia</li>
            <li>AirBaltic</li>
            <li>Emirates</li>
            <li>KLM</li>
            <li>Все авиакомпании</li>
          </List>
          <List>
            <Title>Аэропорты</Title>
            <li>Шереметьево</li>
            <li>Курумоч</li>
            <li>Домодедово</li>
            <li>Толмачево</li>
            <li>Владивосток</li>
            <li>Гамбург</li>
            <li>Все аэропорты</li>
          </List>
        </ListWrap>
      </div>
      <div className="col-xs-12 col-md-6 col-lg-4">
        <ListWrap>
          <List>
            <Title>Направления</Title>
            <li>MOW — SIP</li>
            <li>MOW — AER</li>
            <li>MOW — TIV</li>
            <li>MOW — MRV</li>
            <li>LED — MOW</li>
            <li>MOW — BKK</li>
          </List>
          <List>
            <Title>Сервисы</Title>
            <li>Горящие авиабилеты</li>
            <li>Календарь низких цен</li>
            <li>Карта низких цен</li>
            <li>Спецпредложения</li>
            <li>Таблица цен</li>
            <li>Блог</li>
            <li>Помощь</li>
          </List>
        </ListWrap>
      </div>
    </div>
  );
}
