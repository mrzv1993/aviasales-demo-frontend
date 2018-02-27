import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import InputDepart from "./InputDepart";
import InputComming from "./InputComming";

import ButtonPassenger from "./ButtonPassenger";
import ButtonSearch from "./ButtonSearch";
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
        <Link to="/search">
          <ButtonSearch />
        </Link>
      </SearchBtn>
    </Form>
  );
}
