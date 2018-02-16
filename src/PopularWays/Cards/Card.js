import React, { Component } from "react";
import styled from "styled-components";

import CityCountry from "./CityCountry";

import barca from "./barca@1x.jpg";
import barca2x from "./barca@2x.jpg";
import flagRu from "./flag-ru.svg";

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
`;

const Img = styled.img`
  width: 100%;
  background-size: cover;
  display: block;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

const DescriptionWrapper = styled.div`
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
`;

const Price = styled.h3`
  margin: 0;
  padding-bottom: 0.25rem;
  font-weight: normal;
  line-height: 1rem;
  font-size: 0.875rem;
  text-align: right;

  color: #00bae8;
`;

const Date = styled.p`
  margin: 0;
  font-weight: 500;
  line-height: 1rem;
  font-size: 0.75rem;
  text-align: right;

  color: #a0b0b9;
`;

const Flag = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 1rem;

  @media (max-width: 767px) {
    width: 100%;
    display: none;
  }
`;

export default function() {
  return (
    <Link href="#">
      <Card>
        <picture>
          <source
            media="(max-width: 575px)"
            srcSet={barca + " , " + barca2x + "2x"}
          />
          <source
            media="(mшт-width: 576px)"
            srcSet={barca + " , " + barca2x + "2x"}
          />
          <Img src={barca} srcSet={barca2x} alt="asdasd" />
        </picture>
        <DescriptionWrapper>
          <Flag src={flagRu} alt="Россия" />
          <Description>
            <CityCountry />
            <PriceDate>
              <Price>Найти от 2 407 ₽</Price>
              <Date>18 марта</Date>
            </PriceDate>
          </Description>
        </DescriptionWrapper>
      </Card>
    </Link>
  );
}
