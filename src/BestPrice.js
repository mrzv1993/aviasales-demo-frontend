import React, { Component } from "react";
import styled from "styled-components";
import BlockTitle from "./BlockTitle";
import flagRu from "./assets/flag-ru.png";
import Label from "./BlockTitle";

const BestPrice = styled.section`
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
`;

const Name = styled.div`
  > span {
    font-style: normal;
    font-weight: bold;
    line-height: 32px;
    font-size: 22px;

    color: #5b5b5c;
  }

  > p {
    font-weight: 500;
    line-height: 20px;
    font-size: 12px;

    color: #a0b0b9;
    margin: 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Directions = styled.div`
  border-bottom: 1px dashed #afbec6;
  margin-top: 1.5rem;
`;

const Flag = styled.img`
  display: block;
  width: 32px;
  height: 32px;
`;

const List = styled.ul`
  list-style: none;

  > li {
    padding: 0.75rem 0;
    margin-left: -2.5rem;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 16px;

    color: #4a4a4a;

    > span {
      line-height: 20px;
      font-size: 16px;

      color: #00bae8;
      float: right;
    }
  }
`;

const Notes = styled.div`
  text-align: center;

  > p {
    font-style: normal;
    font-weight: normal;
    line-height: 24px;
    font-size: 16px;
    text-align: center;

    color: #4a4a4a;
  }

  > span {
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    text-align: center;

    color: #a0b0b9;
  }
`;

export default function() {
  return (
    <BestPrice>
      <div className="container">
        <BlockTitle>
          <div className="LabelWrap">
            <Label />
          </div>
          <h2>Лучшие цены на авиабилеты за последний месяц</h2>
        </BlockTitle>
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <Directions>
              <Header>
                <Flag src={flagRu} alt="Aviasales" title="Aviasales" />
                <Name>
                  <span>Симферополь (Крым)</span>
                  <p>КРЫМ</p>
                </Name>
              </Header>

              <List>
                <li>
                  Из Москвы <span>от 4 813 ₽</span>
                </li>
                <li>
                  Из Санкт-Петербурга<span>от 7 857 ₽</span>
                </li>
                <li>
                  Из Новосибирска<span>от 15 127 ₽</span>
                </li>
                <li>
                  Из Екатеринбурга<span>от 9 275 ₽</span>
                </li>
                <li>
                  Из Челябинска<span>от 9 148 ₽</span>
                </li>
              </List>
            </Directions>
          </div>

          <div className="col-xs-12 col-lg-4">
            <Directions>
              <Header>
                <Flag src={flagRu} alt="Aviasales" title="Aviasales" />
                <Name>
                  <span>Ереван</span>
                  <p>АРМЕНИЯ</p>
                </Name>
              </Header>

              <List>
                <li>
                  Из Москвы <span>от 6 758 ₽</span>
                </li>
                <li>
                  Из Санкт-Петербурга<span>от 9 932 ₽</span>
                </li>
                <li>
                  Из Сочи<span>от 11 951 ₽</span>
                </li>
                <li>
                  Из Краснодара<span>от 11 741 ₽</span>
                </li>
                <li>
                  Из Ростова-на-Дону<span>от 11 956 ₽</span>
                </li>
              </List>
            </Directions>
          </div>
          <div className="col-xs-12 col-lg-4">
            <Directions>
              <Header>
                <Flag src={flagRu} alt="Aviasales" title="Aviasales" />
                <Name>
                  <span>Кишинёв</span>
                  <p>МОЛДАВИЯ</p>
                </Name>
              </Header>

              <List>
                <li>
                  Из Москвы <span>от 8 319 ₽</span>
                </li>
                <li>
                  Из Санкт-Петербурга<span>от 10 800 ₽</span>
                </li>
                <li>
                  Из Краснодара<span>от 12 098 ₽</span>
                </li>
                <li>
                  Из Сургута<span>от 16 277 ₽</span>
                </li>
                <li>
                  Из Нового Уренго<span>от 15 987 ₽</span>
                </li>
              </List>
            </Directions>
          </div>
        </div>
        <Notes>
          <p>
            Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
            стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и
            728 авиакомпаний.
          </p>
          <span>
            Цены, найденные пользователями за последние 48 часов, не являются
            офертой.
          </span>
        </Notes>
      </div>
    </BestPrice>
  );
}
