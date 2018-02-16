import React, { Component } from "react";
import styled from "styled-components";

const CityCountry = styled.div`
  @media (max-width: 374px) {
    max-width: 144px;
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
    <CityCountry>
      <City>Симферополь (Крым)</City>
      <Country>Россия</Country>
    </CityCountry>
  );
}
