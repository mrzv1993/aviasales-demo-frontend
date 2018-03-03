import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Category from "./Category";

import compass from "./compass.svg";
import edit from "./edit.svg";

import ru from "../../UI/Flags/ru.svg";
import sp from "../../UI/Flags/sp.svg";

const cards = [
  {
    img:
      "https://ucarecdn.com/73f31a97-e04d-4038-8ed4-313e85cbe4ee/crasnodar.png",
    flag: ru,
    city: "Краснодар",
    price: "Найти от 1 212 ₽",
    country: "РОССИЯ",
    departure: "18 марта"
  },
  {
    img: "https://ucarecdn.com/e38d4d4d-af06-4368-a3c2-a246a08955fb/sochi.png",
    flag: ru,
    city: "Сочи (Адлер)",
    price: "Найти от 1 334 ₽",
    country: "РОССИЯ",
    departure: "27 марта"
  },
  {
    img: "https://ucarecdn.com/9171096e-fa5d-455a-a2b3-a5efaad744df/spb.png",
    flag: ru,
    city: "Санкт-Петербург",
    price: "Найти от 1 508 ₽",
    country: "РОССИЯ",
    departure: "19 февраля"
  },
  {
    img:
      "https://ucarecdn.com/071fceb2-cb1f-44ef-a921-bc78be68f10d/minvodi.png",
    flag: ru,
    city: "Минеральные Воды",
    price: "Найти от 2 074 ₽",
    country: "РОССИЯ",
    departure: "10 февраля"
  },
  {
    img: "https://ucarecdn.com/e6672c0f-1e42-476e-8384-383e050581c7/krim.png",
    flag: ru,
    city: "Симферополь (Крым)",
    price: "Найти от 2 074 ₽",
    country: "КРЫМ",
    departure: "10 февраля"
  },
  {
    img: "https://ucarecdn.com/f9cb2a46-971b-44a8-af5a-056353a57755/barca.png",
    flag: sp,
    city: "Барселона",
    price: "Найти от 4 247 ₽",
    country: "ИСПАНИЯ",
    departure: "24 марта"
  }
];

const TopDestinations = styled.section`
  background: #f8fcff;
`;

const TitleWrap = styled.div`
  text-align: center;
  padding-top: 2.5rem;

  @media (min-width: 768px) {
    padding-top: 3.5rem;
  }
`;

const Label = styled.div`
  margin: 0 auto;
  background-image: url(${compass});
  width: 64px;
  height: 64px;
`;

const Title = styled.h2`
  font-weight: 500;
  line-height: 1.125rem;
  font-size: 1.125rem;
  margin: 0;
  color: #4a4a4a;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ChangeCity = styled.button`
  color: #00ace2;
  background: transparent;
  border: none;
  &:hover {
    color: #ff9241;
  }
`;

export default () => {
  return (
    <TopDestinations>
      <div className="container">
        <TitleWrap>
          <Label />
          <Title>
            Популярные направления перелетов из&nbsp;города
            <ChangeCity type="button">
              {" "}
              Москва <img src={edit} alt="edit" />
            </ChangeCity>
          </Title>
        </TitleWrap>

        <div className="row">
          <div className="col-xl-8 col-xl-offset-2 col-md-10 col-md-offset-1 col-xs-12">
            <Category />
          </div>
        </div>

        <div className="row center-md">
          <div className="col-xs-12 col-lg-6">
            <Card card={cards[0]} />
          </div>
          <div className="col-xs-12 col-lg-6">
            <Card card={cards[1]} />
          </div>
          <div className="col-xs-12 col-lg-6">
            <Card card={cards[2]} />
          </div>
          <div className="col-xs-12 col-lg-6">
            <Card card={cards[3]} />
          </div>
          <div className="col-xs-12 col-lg-6">
            <Card card={cards[4]} />
          </div>
          <div className="col-xs-12 col-lg-6">
            <Card card={cards[5]} />
          </div>
        </div>
      </div>
    </TopDestinations>
  );
};
