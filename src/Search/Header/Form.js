import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import styled from "styled-components";

import InputDepart from "../../Main/Header/Form/InputDepart";
import InputComming from "../../Main/Header/Form/InputComming";
import ButtonForward from "../../Main/Header/Form/ButtonForward";
import ButtonReverse from "../../Main/Header/Form/ButtonReverse";
import ButtonPassenger from "../../Main/Header/Form/ButtonPassenger";
import ButtonSearch from "../../Main/Header/Form/ButtonSearch";

const Form = styled.form`
  padding: 2.5rem 0 2rem 0;
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

//  удалить

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

const Search = () => (
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
        <Forward>
          <ButtonPassenger />
        </Forward>
        <Reverse>
          <ButtonSearch />
        </Reverse>
      </Passenger>
    </Service>
  </Form>
);
export default Search;
