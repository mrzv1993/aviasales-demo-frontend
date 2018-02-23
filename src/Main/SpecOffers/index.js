import React, { Component } from "react";
import styled from "styled-components";

import Offer from "./Offer";

import skyteam from "./skyteam.svg";
import lufthansa from "./lufthansa.svg";

const dataOffer = [
  {
    title: "Билеты от 499 рублей!",
    allianceLogo: skyteam,
    logo: lufthansa,
    price: "499",
    day: "Осталось 45 дней",
    description:
      "Билеты от 499 рублей! Специальное предложение от авиакомпании AirFrance"
  },
  {
    title: "В Нью-Йорк от 20 680 ₽",
    allianceLogo: skyteam,
    logo: lufthansa,
    price: "499",
    day: "Осталось 45 дней",
    description: "Специальное предложение от авиакомпании Lufthansa"
  },
  {
    title: "В Лос-Анджелес от 20 360 ₽",
    allianceLogo: skyteam,
    logo: lufthansa,
    price: "499",
    day: "Осталось 45 дней",
    description: "Специальное предложение от авиакомпании Lufthansa"
  }
];

const SpecOffers = styled.section`
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
  margin-top: 2.5rem;
`;

const Title = styled.h2`
  margin-top: 1rem;
  font-weight: 500;
  font-size: 28px;

  color: #ffffff;
  padding-top: 1rem;
`;

const Note = styled.div`
  text-align: center;
  padding: 2rem 0 1.5rem 0;
  display: flex;
  justify-content: center;
  flex-flow: column;
  @media (min-width: 768px) {
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const ShowAll = styled.a`
  font-size: 16px;
  text-decoration-line: underline;
  color: #ffffff;
`;

const Footnote = styled.span`
  display: inline-block;
  padding-top: 0.5rem;
  line-height: 20px;
  font-size: 16px;
  text-align: center;

  color: #ffffff;
`;

export default () => {
  return (
    <SpecOffers>
      <div className="container">
        <div className="row center-xl">
          <div className="col-xs-12 col-xl-10">
            <Title>Спецпредложения на авиабилеты</Title>
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <Offer data={dataOffer[0]} />
              </div>
              <div className="col-sm-12 col-md-4">
                <Offer data={dataOffer[1]} />
              </div>
              <div className="col-sm-12 col-md-4">
                <Offer data={dataOffer[2]} />
              </div>
            </div>
            <Note>
              <ShowAll href="#">Смотреть все спецпредложения</ShowAll>
              <Footnote>* средняя цена по направлению</Footnote>
            </Note>
          </div>
        </div>
      </div>
    </SpecOffers>
  );
};
