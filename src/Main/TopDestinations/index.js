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

const Title = styled.div`
  padding-top: 2.5rem;
  text-align: center;
  min-width: 312px;
  @media (min-width: 768px) {
    padding-top: 4rem;
  }
`;

const Label = styled.div`
  margin: 0 auto;
  background-image: url(${compass});
  width: 64px;
  height: 64px;
`;

const Txt = styled.h2`
  font-weight: 500;
  line-height: 1.125rem;
  font-size: 1.125rem
  margin-top: 1.5rem;
  color: #4a4a4a;
  @media (min-width: 768px) {
    margin-top: 2.5rem;
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

const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  background: #f8fcff;
`;

export default () => {
  return (
    <Section>
      <div className="container">
        <Title>
          <Label />
          <Txt>
            Популярные направления перелетов из города
            <ChangeCity type="button">
              {" "}
              Москва <img src={edit} alt="edit" />
            </ChangeCity>
          </Txt>
        </Title>

        <div className="row">
          <div className="col-xl-8 col-xl-offset-2 col-md-10 col-md-offset-1 col-xs-12">
            <Category />
          </div>
        </div>

        <div className="row center-md">
          <div className="col-xs-12 col-md-10 col-lg-5">
            <Card card={cards[0]} />
          </div>
          <div className="col-xs-12 col-md-10 col-lg-5">
            <Card card={cards[1]} />
          </div>
          <div className="col-xs-12 col-md-10 col-lg-5">
            <Card card={cards[2]} />
          </div>
          <div className="col-xs-12 col-md-10 col-lg-5">
            <Card card={cards[3]} />
          </div>
          <div className="col-xs-12 col-md-10 col-lg-5">
            <Card card={cards[4]} />
          </div>
          <div className="col-xs-12 col-md-10 col-lg-5">
            <Card card={cards[5]} />
          </div>
        </div>
      </div>
    </Section>
  );
};
