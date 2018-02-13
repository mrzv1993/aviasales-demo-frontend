import React, { Component } from "react";
import styled from "styled-components";

const SpecOffers = styled.section`
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
`;

const Card = styled.div`
  background-color: #ffffff;
  margin-top: 1rem;
`;

export default function() {
  return (
    <SpecOffers>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h2>Спецпредложения на авиабилеты</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <Card>
              <div>Билеты от 499 рублей!</div>
              <div>Логотипи Цена</div>
              <p>
                Билеты от 499 рублей! Специальное предложение от авиакомпании
                Победа
              </p>
              <button>Узнать подробности</button>
            </Card>
          </div>
          <div className="col-xs-12">
            <Card>
              <div>Билеты от 499 рублей!</div>
              <div>Логотипи Цена</div>
              <p>
                Билеты от 499 рублей! Специальное предложение от авиакомпании
                Победа
              </p>
              <button>Узнать подробности</button>
            </Card>
          </div>
          <div className="col-xs-12">
            <Card>
              <div>Билеты от 499 рублей!</div>
              <div>Логотипи Цена</div>
              <p>
                Билеты от 499 рублей! Специальное предложение от авиакомпании
                Победа
              </p>
              <button>Узнать подробности</button>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p>Смотреть все спецпредложения</p>
          </div>
          <div className="col-xs-12">
            <p>* средняя цена по направлению</p>
          </div>
        </div>
      </div>
    </SpecOffers>
  );
}
