import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import styled from "styled-components";

const Form = styled.form`
  background-color: rgba(214, 41, 194, 0.35);
`;

const Places = styled.div`
  background-color: rgba(214, 41, 194, 0.35);
  @media (min-width: 768px) {
    display: inline-block;
    width: 100%;
  }
  @media (min-width: 1200px) {
    display: inline-block;
    width: 39%;
  }
`;

const DateRange = styled.div`
  background-color: rgba(214, 41, 194, 0.35);
  @media (min-width: 768px) {
    display: inline-block;
    width: 49%;
  }
`;

const Service = styled.div`
  background-color: rgba(214, 41, 194, 0.35);
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
  background-color: rgba(214, 41, 194, 0.35);
  @media (min-width: 768px) {
    display: inline-block;
    width: 49%;
  }
`;

//  удалить

const Depart = styled.div`
  background-color: rgba(214, 41, 194, 0.35);
  @media (min-width: 768px) {
    display: inline-block;
    width: 49%;
  }
`;
const Comming = styled.div`
  background-color: rgba(214, 41, 194, 0.35);
  @media (min-width: 768px) {
    display: inline-block;
    width: 49%;
  }
`;

const Forward = styled.div`
  background-color: rgba(214, 41, 194, 0.35);
  @media (min-width: 768px) {
    display: inline-block;
    width: 49%;
  }
`;

const Reverse = styled.div`
  background-color: rgba(214, 41, 194, 0.35);
  @media (min-width: 768px) {
    display: inline-block;
    width: 49%;
  }
`;

const Search = () => (
  <Form>
    <Places>
      <Depart>1</Depart>
      <Comming>2</Comming>
    </Places>
    <Service>
      <DateRange>
        <Forward>
          <DayPicker />
        </Forward>
        <Reverse>4</Reverse>
      </DateRange>
      <Passenger>
        <Forward>5</Forward>
        <Reverse>6</Reverse>
      </Passenger>
    </Service>
  </Form>
);
export default Search;
