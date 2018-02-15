import React, { Component } from "react";
import styled from "styled-components";

import Inputs from "./Inputs";
import Buttons from "./Buttons";

import calendar from "./calendar.svg";
import arrow from "./arrow.svg";

const Wrapper = styled.div`
  margin: 1.5rem auto 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 3rem;
  }
`;

export default function() {
  return (
    <Wrapper>
      <Inputs />
      <Buttons />
    </Wrapper>
  );
}
