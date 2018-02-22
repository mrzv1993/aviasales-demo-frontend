import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import InputDepart from "./InputDepart";
import InputComming from "./InputComming";
import ButtonForward from "./ButtonForward";
import ButtonReverse from "./ButtonReverse";
import ButtonPassenger from "./ButtonPassenger";
import ButtonSearch from "./ButtonSearch";

const Form = styled.form`
    margin: 1.5rem auto 0 auto;
    width: 100%;
  

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
    width: 40%;
  }
`;

const DateRange = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    width: 50%;
  }
`;

const Service = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    width: 100%;
  }
  @media (min-width: 1200px) {
    display: inline-block;
    width: 60%;
  }
`;

const Passenger = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    width: 50%;
  }
`;

const Depart = styled.div`
  position: relative;
  @media (min-width: 768px) {
    display: inline-block;
    width: 50%;
  }
`;
const Comming = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    width: 50%;
  }
`;

const Forward = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    width: 50%;
  }
`;

const Reverse = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    width: 50%;
  }
`;

const SearchBtn = styled.div`
  margin-top: 1rem;

  @media (min-width: 768px) {
    margin-top: 3rem;
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
          <Forward>
            <ButtonForward />
          </Forward>
          <Reverse>
            <ButtonReverse />
          </Reverse>
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
