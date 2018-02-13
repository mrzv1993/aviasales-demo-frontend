import React, { Component } from "react";
import styled from "styled-components";

const BestPrice = styled.section`
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
`;

export default function() {
  return (
    <BestPrice>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div>Компас имг</div>
            <h2>Лучшие цены на авиабилеты за последний месяц</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p>один</p>
          </div>
          <div className="col-xs-12">
            <p>два</p>
          </div>
          <div className="col-xs-12">
            <p>три</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p>
              Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
              стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств
              и 728 авиакомпаний.
            </p>
            <p>
              Цены, найденные пользователями за последние 48 часов, не являются
              офертой.
            </p>
          </div>
        </div>
      </div>
    </BestPrice>
  );
}
