import React, { Component } from "react";
import styled from "styled-components";
import BlockTitle from "./BlockTitle";

const BestPrice = styled.section`
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
`;

export default function() {
  return (
    <BestPrice>
      <div className="container">
        <BlockTitle />
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <div className="WayPriciTitle">
              <img src="" alt="" />
              <h3>Симферополь (Крым)</h3>
              <p>Крым</p>
            </div>
            <ul>
              <li>Из Москвы</li>
              <li>Из Санкт-Петербурга</li>
              <li>Из Новосибирска</li>
              <li>Из Екатеринбурга</li>
              <li>Из Челябинска</li>
            </ul>
          </div>
          <div className="col-xs-12 col-lg-4">
            <div className="WayPriciTitle">
              <img src="" alt="" />
              <h3>Ереван</h3>
              <p>Армения</p>
            </div>
            <ul>
              <li>Из Москвы</li>
              <li>Из Санкт-Петербурга</li>
              <li>Из Сочи</li>
              <li>Из Краснодара</li>
              <li>Из Ростова-на-Дону</li>
            </ul>
          </div>
          <div className="col-xs-12 col-lg-4">
            <div className="WayPriciTitle">
              <img src="" alt="" />
              <h3>Кишинёв</h3>
              <p>Молдавия</p>
            </div>
            <ul>
              <li>Из Москвы</li>
              <li>Из Санкт-Петербурга</li>
              <li>Из Краснодара</li>
              <li>Из Сургута</li>
              <li>Из Нового Уренгоя</li>
            </ul>
          </div>
        </div>
        <p>
          Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
          мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
          авиакомпаний.
        </p>
        <p>
          Цены, найденные пользователями за последние 48 часов, не являются
          офертой.
        </p>
      </div>
    </BestPrice>
  );
}
