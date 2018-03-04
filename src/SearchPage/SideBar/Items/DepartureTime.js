import React from "react";
import styled from "styled-components";

import { Range } from "rc-slider";
import "./range.css";

import arrow from "./arrow.svg";
import air from "./air.svg";

const DepartureTime = styled.div`
  padding: 1.5rem 1rem 2rem 1rem;
  border-top: 1px solid #dddddd;
`;

const Title = styled.h2`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.75rem;
  text-transform: uppercase;
  margin: 0;

  color: #5b5b5c;
`;

const Arrow = styled.img`
  margin-right: 0.5rem;
`;

const Air = styled.img`
  margin: 0 0.5rem;
`;

const Flight = styled.div`
  margin-top: 2.5rem;
`;

const SubTitle = styled.h3`
  display: flex;
  font-weight: bold;
  font-size: 0.75rem;
  color: #323333;
  margin: 0;
  margin-top: 1.5rem;
`;

const Info = styled.div`
  padding-top: 1rem;
`;

const DepartTitle = styled.p`
  line-height: 18px;
  font-size: 12px;
  margin: 0;
  color: #323333;
  margin-bottom: 0.25rem;
`;

const CommingTitle = styled.p`
  line-height: 18px;
  font-size: 12px;
  margin: 0;
  color: #323333;
  margin-bottom: 0.25rem;
`;

const Time = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const Depart = styled.p`
  line-height: 18px;
  font-size: 12px;
  margin: 0;
  color: #323333;
`;
const Comming = styled.p`
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  margin: 0;
`;

export default () => {
  return (
    <DepartureTime>
      <Title>
        <Arrow src={arrow} alt="Раскрыть" />
        Время вылета и прибытия
      </Title>
      <Flight>
        <SubTitle>
          Москва
          <Air src={air} alt="air" />
          Барселона
        </SubTitle>
        <Info>
          <DepartTitle>Вылет из Москвы:</DepartTitle>
          <Time>
            <Depart>до 23:45, 24 фев</Depart>
            <Comming>до 23:45, 24 фев</Comming>
          </Time>
          <Range allowCross={false} defaultValue={[0, 100]} />
        </Info>
        <Info>
          <CommingTitle>Прибытие в Барселону:</CommingTitle>
          <Time>
            <Depart>c 00:05, 24 фев</Depart>
            <Comming>до 23:45, 24 фев</Comming>
          </Time>
          <Range allowCross={false} defaultValue={[0, 100]} />
        </Info>
      </Flight>
      <Flight>
        <SubTitle>
          Барселона
          <Air src={air} alt="air" />
          Москва
        </SubTitle>
        <Info>
          <DepartTitle>Вылет из Барселоны:</DepartTitle>
          <Time>
            <Depart>c 00:05, 24 фев</Depart>
            <Comming>до 23:45, 24 фев</Comming>
          </Time>
          <Range allowCross={false} defaultValue={[0, 100]} />
        </Info>
        <Info>
          <CommingTitle>Прибытие в Москву:</CommingTitle>
          <Time>
            <Depart>c 00:05, 24 фев</Depart>
            <Comming>до 23:45, 24 фев</Comming>
          </Time>
          <Range allowCross={false} defaultValue={[0, 100]} />
        </Info>
      </Flight>
    </DepartureTime>
  );
};
