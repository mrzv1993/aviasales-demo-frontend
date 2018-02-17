import React, { Component } from "react";
import styled from "styled-components";

const FooterLinks = styled.section`
  border-bottom: 1px solid #e0e6e8;
`;

const ListLink = styled.div`
  display: flex;
`;

const Country = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
`;

const City = styled.nav`
  display: flex;
`;

const Title = styled.h3`
  font-weight: 500;
  line-height: 1rem;
  font-size: 0.75rem;

  color: #4a4a4a;
`;

const LastLink = styled.a``;

export default function() {
  return (
    <FooterLinks>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-12">
                <ListLink>
                  <Country>
                    <Title>СТРАНЫ</Title>
                    <a href="#">Россия</a>
                    <a href="#">Россия</a>
                    <a href="#">Россия</a>
                    <a href="#">Россия</a>
                  </Country>
                  <City />
                </ListLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterLinks>
  );
}

{
  /*

export default function() {
  return (
    <Category>
      <div className="row">
        <div className="col-xs-12 col-md-6 col-xl-4">
          <ListWrap>
            <List>
              <Title>СТРАНЫ</Title>
              <li>
                <a href="#">Россия</a>
              </li>
              <li>
                <a href="#">Тайланд</a>
              </li>
              <li>
                <a href="#">Черногория</a>
              </li>
              <li>
                <a href="#">Кипр</a>
              </li>
              <li>
                <a href="#">Болгария</a>
              </li>
              <li>
                <a href="#">Грузия</a>
              </li>
              <li>
                <LastLink href="#">Все страны →</LastLink>
              </li>
            </List>
            <List>
              <Title>ГОРОДА</Title>
              <li>
                <a href="#">Москва</a>
              </li>
              <li>
                <a href="#">Санкт-Петербург</a>
              </li>
              <li>
                <a href="#">Симферополь</a>
              </li>
              <li>
                <a href="#">Адлер</a>
              </li>
              <li>
                <a href="#">Екатеренбург</a>
              </li>
              <li>
                <a href="#">Лондон</a>
              </li>
              <li>
                <LastLink href="#">Все города →</LastLink>
              </li>
            </List>
          </ListWrap>
        </div>
        <div className="col-xs-12 col-md-6 col-xl-4">
          <ListWrap>
            <List>
              <Title>АВИАКОМПАНИИ</Title>
              <li>
                <a href="#">Air Berlin</a>
              </li>
              <li>
                <a href="#">Air France</a>
              </li>
              <li>
                <a href="#">Alitalia</a>
              </li>
              <li>
                <a href="#">AirBaltic</a>
              </li>
              <li>
                <a href="#">Emirates</a>
              </li>
              <li>
                <a href="#">KLM</a>
              </li>
              <li>
                <LastLink href="#">Все авиакомпании →</LastLink>
              </li>
            </List>
            <List>
              <Title>АЭРОПОРТЫ</Title>
              <li>
                <a href="#">Шереметьево</a>
              </li>
              <li>
                <a href="#">Курумоч</a>
              </li>
              <li>
                <a href="#">Домодедово</a>
              </li>
              <li>
                <a href="#">Толмачево</a>
              </li>
              <li>
                <a href="#">Владивосток</a>
              </li>
              <li>
                <a href="#">Гамбург</a>
              </li>
              <li>
                <LastLink href="#">Все аэропорты →</LastLink>
              </li>
            </List>
          </ListWrap>
        </div>
        <div className="col-xs-12 col-md-6 col-xl-4">
          <ListWrap>
            <List>
              <Title>НАПРАВЛЕНИ</Title>
              <li>
                <a href="#">MOW — SIP</a>
              </li>
              <li>
                <a href="#">MOW — AER</a>
              </li>
              <li>
                <a href="#">MOW — TIV</a>
              </li>
              <li>
                <a href="#">MOW — MRV</a>
              </li>
              <li>
                <a href="#">LED — MOW</a>
              </li>
              <li>
                <a href="#">MOW — BKK</a>
              </li>
            </List>
            <List>
              <Title>СЕРВИСЫ</Title>
              <li>
                <a href="#">Горящие авиабилеты</a>
              </li>
              <li>
                <a href="#">Календарь низких цен</a>
              </li>
              <li>
                <a href="#">Карта низких цен</a>
              </li>
              <li>
                <a href="#">Спецпредложения</a>
              </li>
              <li>
                <a href="#">Таблица цен</a>
              </li>
              <li>
                <a href="#">Блог</a>
              </li>
              <li>
                <a href="#">Помощь</a>
              </li>
            </List>
          </ListWrap>
        </div>
      </div>
    </Category>
  );
}

*/
}