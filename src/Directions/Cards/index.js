import React, { Component } from "react";
import styled from "styled-components";

import сrasnodar from "./сrasnodar@1x.jpg";
import сrasnodar2x from "./сrasnodar@2x.jpg";
import sochi from "./sochi@1x.jpg";
import sochi2x from "./sochi@2x.jpg";
import spb from "./spb@1x.jpg";
import spb2x from "./spb@2x.jpg";
import minVodi from "./min-vodi@1x.jpg";
import minVodi2x from "./min-vodi@2x.jpg";
import krim from "./krim@1x.jpg";
import krim2x from "./krim@2x.jpg";
import barca from "./barca@1x.jpg";
import barca2x from "./barca@2x.jpg";

import flagRu from "./flag-ru.svg";
import flagSp from "./flag-sp.svg";

const Cards = styled.div`
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  margin-top: 1rem;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.35);
  }
`;

const Img = styled.img`
  width: 100%;
  background-size: cover;
  display: block;
  will-change: transform;
`;

const DescriptionCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 0;
`;

const Description = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 1rem;
`;

const PriceDate = styled.div`
  min-width: 128px;
  text-align: right;
`;

const Price = styled.h4`
  margin: 0;
  padding-bottom: 0.25rem;
  font-weight: normal;
  line-height: 1rem;
  font-size: 0.875rem;
  text-align: right;

  color: #00bae8;

  ${Card}:hover & {
    color: #ed752e;
  }
`;

const Date = styled.p`
  margin: 0;
  font-weight: 500;
  line-height: 1rem;
  font-size: 0.75rem;
  text-align: right;
  display: inline-block;

  color: #a0b0b9;
`;

const Flag = styled.img`
  width: 100%;
  display: none;

  @media (min-width: 767px) {
    display: block;
    width: 32px;
    height: 32px;
    margin-left: 1rem;
  }
`;

const CityCountry = styled.div`
  width: 144px;

  @media (min-width: 576px) {
    width: 100%;
  }
`;

const City = styled.h3`
  margin: 0;
  padding-bottom: 0.25rem;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1rem;

  color: #5b5b5c;
  white-space: nowrap; /* Запрещаем перенос строк */
  overflow: hidden; /* Обрезаем все, что не помещается в область */
  text-overflow: ellipsis; /* Добавляем многоточие */
`;

const Country = styled.p`
  margin: 0;
  font-weight: 500;
  line-height: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;

  color: #a0b0b9;
`;

export default function() {
  return (
    <Cards>
      <div className="row">
        <div className="col-xs-12 col-xl-6">
          <Link href="#">
            <Card>
              <picture>
                <source
                  media="(max-width: 575px)"
                  srcSet={сrasnodar + " , " + сrasnodar2x + "2x"}
                />
                <Img src={сrasnodar} srcSet={сrasnodar2x} alt="Краснодар" />
              </picture>
              <DescriptionCard>
                <Flag src={flagRu} alt="Россия" />
                <Description>
                  <CityCountry>
                    <City>Краснодар</City>
                    <Country>Россия</Country>
                  </CityCountry>
                  <PriceDate>
                    <Price>Найти от 1 212 ₽</Price>
                    <Date>18 марта</Date>
                  </PriceDate>
                </Description>
              </DescriptionCard>
            </Card>
          </Link>
        </div>
        <div className="col-xs-12 col-xl-6">
          <Link href="#">
            <Card>
              <picture>
                <source
                  media="(max-width: 575px)"
                  srcSet={sochi + " , " + sochi2x + "2x"}
                />
                <Img src={sochi} srcSet={sochi2x} alt="Сочи" />
              </picture>
              <DescriptionCard>
                <Flag src={flagRu} alt="Россия" />
                <Description>
                  <CityCountry>
                    <City>Сочи (Адлер)</City>
                    <Country>Россия</Country>
                  </CityCountry>
                  <PriceDate>
                    <Price>Найти от 1 334 ₽</Price>
                    <Date>27 марта</Date>
                  </PriceDate>
                </Description>
              </DescriptionCard>
            </Card>
          </Link>
        </div>
        <div className="col-xs-12 col-xl-6">
          <Link href="#">
            <Card>
              <picture>
                <source
                  media="(max-width: 575px)"
                  srcSet={spb + " , " + spb2x + "2x"}
                />
                <Img src={spb} srcSet={spb2x} alt="Санкт-Петербург" />
              </picture>
              <DescriptionCard>
                <Flag src={flagRu} alt="Россия" />
                <Description>
                  <CityCountry>
                    <City>Санкт-Петербург</City>
                    <Country>Россия</Country>
                  </CityCountry>
                  <PriceDate>
                    <Price>Найти от 1 508 ₽</Price>
                    <Date>19 февраля</Date>
                  </PriceDate>
                </Description>
              </DescriptionCard>
            </Card>
          </Link>
        </div>
        <div className="col-xs-12 col-xl-6">
          <Link href="#">
            <Card>
              <picture>
                <source
                  media="(max-width: 575px)"
                  srcSet={minVodi + " , " + minVodi2x + "2x"}
                />
                <Img src={minVodi} srcSet={minVodi2x} alt="Миниральные воды" />
              </picture>
              <DescriptionCard>
                <Flag src={flagRu} alt="Россия" />
                <Description>
                  <CityCountry>
                    <City>Минеральные Воды</City>
                    <Country>Россия</Country>
                  </CityCountry>
                  <PriceDate>
                    <Price>Найти от 2 043 ₽</Price>
                    <Date>13 марта</Date>
                  </PriceDate>
                </Description>
              </DescriptionCard>
            </Card>
          </Link>
        </div>
        <div className="col-xs-12 col-xl-6">
          <Link href="#">
            <Card>
              <picture>
                <source
                  media="(max-width: 575px)"
                  srcSet={krim + " , " + krim2x + "2x"}
                />
                <Img src={krim} srcSet={krim2x} alt="Симферопаль" />
              </picture>
              <DescriptionCard>
                <Flag src={flagRu} alt="Россия" />
                <Description>
                  <CityCountry>
                    <City>Симферополь (Крым)</City>
                    <Country>Россия</Country>
                  </CityCountry>
                  <PriceDate>
                    <Price>Найти от 2 407 ₽</Price>
                    <Date>18 марта</Date>
                  </PriceDate>
                </Description>
              </DescriptionCard>
            </Card>
          </Link>
        </div>
        <div className="col-xs-12 col-xl-6">
          <Link href="#">
            <Card>
              <picture>
                <source
                  media="(max-width: 575px)"
                  srcSet={barca + " , " + barca2x + "2x"}
                />
                <Img src={barca} srcSet={barca2x} alt="Барселона" />
              </picture>
              <DescriptionCard>
                <Flag src={flagSp} alt="Россия" />
                <Description>
                  <CityCountry>
                    <City>Барселона</City>
                    <Country>Испания</Country>
                  </CityCountry>
                  <PriceDate>
                    <Price>Найти от 4 247 ₽</Price>
                    <Date>24 марта</Date>
                  </PriceDate>
                </Description>
              </DescriptionCard>
            </Card>
          </Link>
        </div>
      </div>
    </Cards>
  );
}
