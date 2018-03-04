import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import airplane from "./airplane.svg";

import InputDepart from "./InputDepart";
import InputComming from "./InputComming";

import ButtonPassenger from "./ButtonPassenger";
import DatePicker from "./DatePicker";

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  margin-top: 1rem;

    @media (min-width: 768px) {
      margin-top: 2.5rem;
    }
}
`;

const Places = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    width: 100%;
  }
  @media (min-width: 1200px) {
    display: inline-block;
    width: calc(40% - 2px);
    margin-right: 2px;
  }
`;

const DateRange = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    width: calc(50% - 2px);
    margin-right: 2px;
  }
  @media (min-width: 1200px) {
    width: calc(60% - 2px);
  }
`;

const Passenger = styled.div`
  margin-top: 2px;
  @media (min-width: 768px) {
    display: inline-block;
    width: 50%;
    margin-top: 0;
  }
  @media (min-width: 1200px) {
    display: inline-block;
    width: 40%;
    margin-top: 0;
  }
`;

const Service = styled.div`
  margin-top: 2px;

  @media (min-width: 768px) {
    display: inline-block;
    width: 100%;
  }

  @media (min-width: 1200px) {
    margin-top: 0;
    display: inline-block;
    width: 60%;
  }
`;

const Depart = styled.div`
  position: relative;
  @media (min-width: 768px) {
    display: inline-block;
    width: calc(50% - 2px);
    margin-right: 2px;
  }
`;
const Comming = styled.div`
  margin-top: 2px;

  @media (min-width: 768px) {
    margin-top: 0;
    display: inline-block;
    width: 50%;
  }
`;

const SearchBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  @media (min-width: 768px) {
    margin-top: 2rem;
  }

  @media (min-width: 1200px) {
    margin-top: 2rem;
  }
`;

const ButtonSearch = styled(Link)`
  background-color: #ff9241;
  border-radius: 4px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.5s;

  @media (min-width: 768px) {
    max-width: 312px;
  }

  &:hover {
    background-color: #ffa059;
  }
`;

const InnerWrap = styled.div`
  position: relative;
  padding: 1rem 0;
  padding-right: 4rem;
`;

const Text = styled.p`
  white-space: nowrap;
  font-weight: 900;
  line-height: normal;
  font-size: 28px;
  color: #ffffff;
  margin: 0;
`;

const Airpalne = styled.img`
  position: absolute;
  top: calc(50% - 10px);
  right: 0.5rem;
  transition: right 0.75s;

  ${ButtonSearch}:hover & {
    right: 0;
  }
`;

export default function() {
  return (
    <Form>
      <Places>
        <Depart>
          <InputDepart />
        </Depart>
        <Comming>
          <InputComming />
        </Comming>
      </Places>
      <Service>
        <DateRange>
          <DatePicker />
        </DateRange>
        <Passenger>
          <ButtonPassenger />
        </Passenger>
      </Service>
      <SearchBtn>
        <ButtonSearch to="/search">
          <InnerWrap>
            <Text>Найти билеты</Text>
            <Airpalne src={airplane} alt="airplane" />
          </InnerWrap>
        </ButtonSearch>
      </SearchBtn>
    </Form>
  );
}
