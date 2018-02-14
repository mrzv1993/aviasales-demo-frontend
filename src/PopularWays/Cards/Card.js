import React, { Component } from "react";
import styled from "styled-components";
import barca from "./barca@1x.jpg";
import barca2x from "./barca@2x.jpg";

const Link = styled.a`
  text-decoration: none;
`;

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1rem;
`;

const CardCover = styled.img`
  width: 100%;
  background-size: cover;
  height: 128px;
`;

const CardData = styled.div`
  padding-top: 1rem;
  margin: 0 1rem;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  > h3 {
    margin: 0;
  }

  > p {
    margin: 0.75rem 0;
  }
`;

const City = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  color: #5b5b5c;
  width: 50%;
`;

const Price = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-align: right;

  color: #00bae8;
  width: 50%;
`;

const Country = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  width: 50%;

  color: #a0b0b9;
`;
const Date = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;

  font-size: 12px;
  text-align: right;

  color: #a0b0b9;
  width: 50%;
`;

export default function() {
  return (
    <Link href="#">
      <Card>
        <CardCover
          src={barca}
          srcset={barca2x}
          alt="Aviasales"
          title="Aviasales"
        />
        <CardData>
          <City>Краснодар</City>
          <Price>Найти от 1 212 ₽ </Price>
          <Country>Россия </Country>
          <Date>18 марта </Date>
        </CardData>
      </Card>
    </Link>
  );
}
