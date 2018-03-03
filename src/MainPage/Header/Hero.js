import React from "react";
import styled from "styled-components";

import Form from "./Form";

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  justify-content: center;
`;

const Title = styled.h1`
  margin: 0;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.h2`
  display: none;
  margin: 0;
  margin-top: 0.5rem;
  color: #ffffff;
  text-align: center;
  font-weight: bold;

  @media (min-width: 768px) {
    display: block;
    font-size: 1.25rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export default function() {
  return (
    <Hero>
      <Title>Поиск дешевых авиабилетов</Title>
      <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
      <div className="row center-md">
        <div className="col-md-12">
          <Form />
        </div>
      </div>
    </Hero>
  );
}
