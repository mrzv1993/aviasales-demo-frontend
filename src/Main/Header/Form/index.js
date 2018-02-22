import React, { Component } from "react";
import styled from "styled-components";

import InputDepart from "./InputDepart";
import InputComming from "./InputComming";

import arrows from "./arrows.svg";

const Form = styled.form`
    margin: 1.5rem auto 0 auto;
    width: 100%;
    background-color: rgba(214, 41, 194, 0.35);

    @media (min-width: 768px) {
        margin-top: 2.5rem;
    }
}
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

const Depart = styled.div`
  background-color: rgba(214, 41, 194, 0.35);
  position: relative;
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
          <Forward>3</Forward>
          <Reverse>4</Reverse>
        </DateRange>
        <Passenger>
          <Forward>5</Forward>
        </Passenger>
      </Service>
      <Reverse>6</Reverse>
    </Form>
  );
}
