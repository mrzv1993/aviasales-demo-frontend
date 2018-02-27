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
  @media (min-width: 768px) {
    display: inline-block;
    width: 50%;
  }
`;

const ButtonSearch = styled(Link)`
  padding: 1rem 1rem;
  background-color: #ff9241;
  border-radius: 4px;
  font-weight: 900;
  font-size: 28px;
  color: #ffffff;
  border: none;
  width: 100%;
  display: block;
  margin: 0 auto;
  margin-top: 1rem;
  text-decoration: none;
  text-align: center;

  @media (min-width: 768px) {
    width: calc(100% - 2px);
    max-width: 312px;
    margin-top: 2rem;
  }

  @media (min-width: 1200px) {
    margin-top: 3rem;
  }

  &:hover {
    background-color: #ff9d54;
  }
`;

const Airpalne = styled.img`
  height: 24px;
  margin-left: 0.75rem;
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
          Найти билеты
          <Airpalne src={airplane} alt="airplane" />
        </ButtonSearch>
      </SearchBtn>
    </Form>
  );
}
